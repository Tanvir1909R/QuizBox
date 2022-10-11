import React from 'react'
import { useLoaderData } from 'react-router-dom'
import QuizCard from '../../components/quizCard/QuizCard'
import './topics.css'

const Topics = () => {
  const {data} = useLoaderData()
  return (
    <section>
        <div className="container">
          <div className="topisWrapper">
            <div className="aboutSite">
              <div className="aboutDesc">
                <h1>Welcome To The Quiz Box</h1>
                <p>Complete The Quiz And Enrich Your Knowledge Of Programming</p>
                <p>BE THE HERO </p>
              </div>
              <div className="aboutImg">
                <img src="./img/homeImg.jpg" alt="" />
              </div>
            </div>
            <div className="allQuiz">
              {
                data.map(quiz => <QuizCard key={quiz.id} quiz={quiz} />)
              }
            </div>
          </div>
        </div>
    </section>
  )
}

export default Topics