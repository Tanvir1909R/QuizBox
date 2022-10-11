import React, { useState } from "react";
import Option from "../option/Option";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./quiz.css";

const Quiz = ({ question, setCorrect }) => {
  const [visible, setVisible] = useState(false);
  const { options } = question;
  const handleEye = () => {
    setVisible(!visible);
  };
  const Toast = (e) => {
    const targetDiv = e.target.closest(".option");
    const correctAns = question.correctAnswer;
    if (targetDiv.innerText === correctAns) {
      toast.success("Your ans is correct", {
        position: "top-right",
        autoClose: 1000,
        theme: "dark",
      });
    } else {
      toast.warn("Your ans is wrong", {
        position: "top-right",
        autoClose: 1000,
        theme: "dark",
      });
    }
  };
  return (
    <div className="quiz">
      <div className="question">
        <h1>{question.question}</h1>
        {visible ? (
          <p>
            correct Ans is:{" "}
            <span style={{ color: "yellowgreen" }}>
              {question.correctAnswer}
            </span>
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="options">
        {options.map((option, i) => (
          <Option key={i} option={option} toast={Toast} />
        ))}
      </div>
      <div className="eye" onClick={handleEye}>
        {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Quiz;
