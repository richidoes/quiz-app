import React from "react";

const QuestionForm = ({ currentQuestion, handleAnswerButton, questions }) => {
  return (
    <>
      <div className="question-section">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div className="question-text">
          {questions[currentQuestion].questionText}
        </div>
      </div>
      <div className="answer-section">
        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
          <button
            key={index}
            onClick={() => handleAnswerButton(answerOption.isCorrect)}
          >
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </>
  );
};

export default QuestionForm;
