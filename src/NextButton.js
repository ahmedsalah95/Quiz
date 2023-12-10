export default function NextButton({dispatch,answer,questions,currentQuestion}) {
    if(!answer) return null;
    if(questions.length === currentQuestion+1){
      
      return ( 
        <>
        <button className="btn btn-ui" onClick={()=>dispatch({type:'finished'})}>Finish</button>
               
        </>
               
      );
    }
    else{
      return(
        <>
        <button className="btn btn-ui" onClick={()=>dispatch({type:'newQuestion'})}>Next</button>

          <p>{questions.length} / {currentQuestion+1}</p>
        </>
      );
    }
}
