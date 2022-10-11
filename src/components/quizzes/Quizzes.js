import React, { useEffect, useRef, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Quiz from '../quiz/Quiz'
import './quizzes.css'

const Quizzes = () => {
    const [correct, setCorrect] = useState(false);
    const toast = useRef();
    const {data} = useLoaderData()
    const {questions} = data
    
    useEffect(()=>{
        if(correct || !correct){
            toast.current.classList.add('toastActive')
        }
        setTimeout(()=>{
            toast.current.classList.remove('toastActive')
        },1000)
    },[correct])
  return (
    <section className='quiz'>
        <div className="container">
            <div className="quizWrapper">
                <h1 className='quizTitle'>Quiz of {data.name}</h1>
                <div className="quizBox">
                    {questions.map( question => <Quiz key={question.id} question={question} setCorrect={setCorrect} />)}
                    
                    <div className={`${correct ? 'correct' : 'wrong'} toast`} ref={toast}>
                        <h1>{correct ? 'Your answer is correct' : 'your answer is wrong'}</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Quizzes