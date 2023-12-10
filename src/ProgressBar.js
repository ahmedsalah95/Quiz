import React from 'react'

export default function ProgressBar({questions,currentQuestion,points,maxNumberOfPoints}) {
  return (
    <div>
        <progress max={questions.length} value={currentQuestion+1}/>
        <p>questions:  <span>{currentQuestion+1}/{questions.length}</span></p>
        <p>points: <span>{points}/{maxNumberOfPoints}</span></p>
    </div>
  )
}
