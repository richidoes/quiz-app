import React, { useState } from "react";
import QuestionForm from "./components/QuestionForm";
import Score from "./components/Score";
import { questions } from "./data";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButton = (isCorrect) => {
    const nextQuestion = currentQuestion + 1;

    if (isCorrect === true) {
      setScore(score + 1);
    }
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    if (showScore === true) {
      setScore(0);
      setCurrentQuestion(0);
      setShowScore(false);
    }
    return;
  };

  return (
    <div className="app">
      {showScore ? (
        <Score
          score={score}
          handleRestartQuiz={handleRestartQuiz}
          questions={questions}
        />
      ) : (
        <QuestionForm
          currentQuestion={currentQuestion}
          handleAnswerButton={handleAnswerButton}
          questions={questions}
        />
      )}
    </div>
  );
};

export default App;
