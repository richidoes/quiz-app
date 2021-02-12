import React from "react";

const Score = ({ score, handleRestartQuiz, questions }) => {
  return (
    <>
      <div className="score-section">
        You scored {score} out of {questions.length}
      </div>
      <button onClick={handleRestartQuiz} className={"restart-button"}>
        restart
      </button>
    </>
  );
};

export default Score;
