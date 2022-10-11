import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../quiz/Quiz";
import "./quizzes.css";

const Quizzes = () => {
  const { data } = useLoaderData();
  const { questions } = data;

  return (
    <section>
      <div className="container">
        <div className="quizWrapper">
          <h1 className="quizTitle">Quiz of {data.name}</h1>
          <div className="quizBox">
            {questions.map((question) => (
              <Quiz
                key={question.id}
                question={question}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quizzes;
