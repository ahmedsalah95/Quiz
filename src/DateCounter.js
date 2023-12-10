import { useReducer } from "react";

function reducer(state,action){
  if(action.type==="inc"){
    return {
      ...state,
      count: state.count + action.payload.count
    } 
  }else if(action.type ==="dec"){
    return {
      ...state,
      count: state.count - action.payload.count
    } 
  }else if(action.type === "reset"){
    return {
      ...state,
      count:  action.payload.count
    } 
  }else if(action.type === "setCount"){
    return {
      ...state,
      count:  action.payload.count
    } 
  }
}
function DateCounter() {
  //const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  // const [count,dispatch] = useReducer(reducer,0);


  const initState = {
      count:0,
      step:1
  };

  const [state,dispatch] = useReducer(reducer,initState);

  const  {count,step} = state;
  // This mutates the date object.
  const date = new Date("june 21 2027");
 // date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({type:'dec',payload:
        {
          ...initState,
          count:1
        }
  });

    // setCount((count) => count - 1);
    //setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({type:'inc',payload:
    {
      ...initState,
      count:1
    }
  });
    // setCount((count) => count + 1);
    //setCount((count) => count + step);
  };

  const defineCount = function (e) {
  //  setCount(Number(e.target.value));
        dispatch({type:'setCount',payload:{
          ...initState,
          count:Number(e.target.value)
        }});
  };

  const defineStep = function (e) {
   // setStep(Number(e.target.value));
   dispatch({type:'defineStep',payload:
    {
      ...initState,
      step:Number(e.target.value)
    }
  })
  };

  const reset = function () {
    //setCount(0);
    dispatch({type:'reset',payload:
    {
      ...initState,
      count:0,
      step:1
    }
  })

  //  setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
