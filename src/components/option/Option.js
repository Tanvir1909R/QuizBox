import React from 'react'
import './option.css'

const Option = ({option,optionHandle}) => {

  return (
    <div className='option' onClick={optionHandle}>
        <p>{option}</p>
    </div>
  )
}

export default Option