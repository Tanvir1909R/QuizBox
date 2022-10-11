import React, { useState } from 'react'
import Option from '../option/Option';
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import './quiz.css'

const Quiz = ({question, setCorrect}) => {
  const [visible, setVisible] = useState(false)
  console.log(question);
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
    const handleEye = ()=>{
      setVisible(!visible)
    }
  return (
    <div className='quiz'>
        <div className="question">
            <h1>{question.question}</h1>
            {/* <p style={`${visible ? {opacity:'1'} : {opacity:'0'}}`}>{question.correctAnswer}</p> */}
            {
              visible ? <p>{question.correctAnswer}</p> : ''
            }
        </div>
        <div className="options">
            {options.map((option, i) => <Option key={i} option={option} optionHandle={optionHandle}/>)}
        </div>
        <div className="eye" onClick={handleEye}>
          { visible ? <AiFillEye /> : <AiFillEyeInvisible />}
        </div>
    </div>
  )
}

export default Quiz