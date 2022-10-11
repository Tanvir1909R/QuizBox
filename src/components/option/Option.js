import React from 'react'
import './option.css'

const Option = ({option, toast}) => {
  // const optionHandle = (e)=>{
    //   const targetDiv =  e.target.closest('.option');
    //   const correctAns = question.correctAnswer;
    //   if(targetDiv.innerText === correctAns){
    //     setCorrect(true);
    //   }else{
    //     setCorrect(false);
    //   }
    // }

  return (
    <div className='option' onClick={toast}>
        <p>{option}</p>
    </div>
  )
}

export default Option