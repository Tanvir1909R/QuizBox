import React from 'react'
import './quiz.css'

const Quiz = ({question}) => {
    console.log(question);
  return (
    <div className='quiz'>
        <div className="question">
            <h1>{question.question}</h1>
        </div>
        <div className="options">
            hello
        </div>
    </div>
  )
}

export default Quiz