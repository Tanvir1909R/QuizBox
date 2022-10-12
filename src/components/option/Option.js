import React from 'react'
import './option.css'

const Option = ({option, toast}) => {

  return (
    <div className='option' onClick={toast}>
        <p>{option}</p>
    </div>
  )
}

export default Option