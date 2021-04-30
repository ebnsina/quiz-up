import React from 'react';

function QuizStart({ onQuizStart }) {
  return (
    <div className="quiz-start">
      <h2 className="quiz-start-title">Start the Quiz</h2>
      <p className="quiz-start-excerpt">Good Luck!!</p>
      <button className="button" onClick={onQuizStart}>
        Start Quiz
      </button>
    </div>
  );
}

export default QuizStart;
