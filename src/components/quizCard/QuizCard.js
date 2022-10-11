import React from 'react'
import { Link } from 'react-router-dom'
import './quizcard.css'

const QuizCard = ({quiz}) => {
  return (
    <div className='quizCard'>
        <div className="quizCardImg">
            <img src={quiz.logo} alt="" />
        </div>
        <div className="quizCardDesc">
            <h3>{quiz.name}</h3>
            <Link to={`/quiz/${quiz.id}`}>Start Quiz</Link>
        </div>
    </div>
  )
}

export default QuizCard