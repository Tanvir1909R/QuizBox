import React from 'react'
import Option from '../option/Option';
import './quiz.css'

const Quiz = ({question, setCorrect}) => {
    const { options } = question;
    const optionHandle = (e)=>{
      const targetDiv =  e.target.closest('.option');
      const correctAns = question.correctAnswer;
      if(targetDiv.innerText === correctAns){
        setCorrect(true);
      }else{
        setCorrect(false);
      }
    }
  return (
    <div className='quiz'>
        <div className="question">
            <h1>{question.question}</h1>
        </div>
        <div className="options">
            {options.map((option, i) => <Option key={i} option={option} optionHandle={optionHandle}/>)}
        </div>
    </div>
  )
}

export default Quiz