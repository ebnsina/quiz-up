import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function QuizEnd({ results, data }) {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  useEffect(() => {
    let correct = 0;
    results.forEach((result, idx) => {
      if (result.a === data[idx].answer) {
        correct++;
      }
    });

    setCorrectAnswers(correct);
  }, [data, results]);

  return (
    <div className="review-score">
      <h4 className="score-title">
        <i aria-label="medal" className="fas fa-medal"></i> Score
      </h4>
      <p className="score-percentage">
        {Math.floor((correctAnswers / data.length) * 100)}%
      </p>
      <p className="congratulations">Congratulations</p>
      <p className="out-of">
        You got {correctAnswers} out of {data.length} Questions.
      </p>

      <Link
        to={{
          pathname: '/review',
          state: {
            results: results,
            data: data,
          },
        }}
      >
        <button type="button" className="btn btn-primary">
          Review
        </button>
      </Link>

      <div className="share-score">
        <p>Share score</p>
        <ul>
          <li>
            <a href="#/">
              <i aria-label="facebook" className="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="#/">
              <i aria-label="linkedin" className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="tip">
        You can attend this workshop to improve your skill
      </div>
    </div>
  );
}

export default QuizEnd;
