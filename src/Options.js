export default function Options({question,distpatch,answer}) {
    const hasAnswered = answer !==null;
  return (
    <div className="options">
    {question.options.map((option,index) => (
    <button className={`btn btn-option ${  index === answer? "answer":"" } ${hasAnswered ? index===question.correctOption?"correct":"wrong" : ''}`} 
    onClick={()=>distpatch({type:'newAnswer',payload:index})} 
    key={index}
    disabled={hasAnswered}
    >{option}</button>
    ))}
 </div>
  )
}
