import React from 'react'
import Option from '../option/Option';
import './quiz.css'

const Quiz = ({question}) => {
    const { options } = question;
    console.log(options);
  return (
    <div className='quiz'>
        <div className="question">
            <h1>{question.question}</h1>
        </div>
        <div className="options">
            {options.map((option, i) => <Option key={i} option={option}/>)}
        </div>
    </div>
  )
}

export default Quiz