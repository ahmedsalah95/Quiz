export default function StartScreen({numberOfQuestions,dispatch}) {
  return (
    <div className="start">
        <h2>welcome to react quiz </h2>
        <h3>{numberOfQuestions} questions to test your react mastery</h3>
        <button className="btn btn-ui" onClick={()=>dispatch({type:'Start'})}>Let's Start</button>
    </div>
  )
}
