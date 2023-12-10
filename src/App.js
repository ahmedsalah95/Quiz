import React, { useEffect, useReducer } from 'react'
import Header from './Header';
import Main from './Main';
import Error from './Error';
import Loader from './Loader';
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import ProgressBar from './ProgressBar';
import FinishScreen from './FinishScreen';
const initialState = {
    status:'loading',
    questions:[],
    index:0,
    answer:null,
    points:0
};


function reducer(state,action){
  switch(action.type){
    case 'DataRecieved':
      return{
         ...state,
         status:'ready',
         questions: action.payload
      };
    case 'Error':
      return{
        ...state,
        status:'error'
      }; 
    case 'Start':
      return{
        ...state,
        status:'start'
      }  
    case 'newAnswer':
      const question = state.questions.at(state.index);
      return{
        ...state,
        answer: action.payload,
        points: question.correctOption === action.payload ?
        state.points+question.points:
        state.points
      } 
    case 'newQuestion':
      return{
        ...state,
        index : state.index+1,
        answer:null
      }
    case 'finished':
      return{
        ...state,
        index: 0,
        answer:null
      }  
    default: throw new Error('action unknown');
  }
}

export default function App() {

  const [state,dispatch] = useReducer(reducer,initialState);
  const numberOfQuestions =  state.questions.length;
  const maxNumberOfPoints = state.questions.reduce((prev,curr)=> prev+curr.points,0)

useEffect(function(){
  fetch('http://localhost:8000/questions')
  .then((res)=>res.json())
  .then((data)=>dispatch({type:'DataRecieved',payload:data}))
  .catch((error)=>dispatch({type:'Error'}))
},[]);

  return (
    <div className='app'>
      <Header/>
      <Main>
        {state.status === "error" && <Error/>}
        {state.status === "loading" && <Loader/>}
        {state.status === "ready" && <StartScreen dispatch={dispatch} numberOfQuestions={numberOfQuestions}/> } 
        {state.status ==="start"  && 
          <>
          {/* <ProgressBar  questions={state.questions} currentQuestion={state.index} points={state.points} maxNumberOfPoints={maxNumberOfPoints}/> */}

           <Question 
          question={state.questions[state.index]}
          dispatch={dispatch}
          answer={state.answer}
          />
          <NextButton dispatch={dispatch} answer={state.answer} questions={state.questions} currentQuestion={state.index} />
          </>
          }
          {
            state.status ==="finished" && <>
              <FinishScreen points={state.points} maxNumberOfPoints={maxNumberOfPoints}/>
            </>
          }
      </Main>

    </div>
  )
}
