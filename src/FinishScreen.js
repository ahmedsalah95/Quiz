import React from 'react'

export default function FinishScreen({points,maxNumberOfPoints}) {
  return (
    <div className='result'>
        <p>you got {points} of {maxNumberOfPoints} points</p>
    </div>
  )
}
