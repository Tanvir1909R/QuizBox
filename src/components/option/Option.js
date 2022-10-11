import React from 'react'
import './option.css'

const Option = ({option}) => {
  return (
    <div className='option'>
        <p>{option}</p>
    </div>
  )
}

export default Option