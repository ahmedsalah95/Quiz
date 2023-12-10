import Options from "./Options";

export default function Question({question,dispatch,answer}) {
   
  return (
    <div>
    <h3>{question.question}</h3>
    <Options question={question} distpatch={dispatch} answer={answer}/>

    </div>
  )
}
