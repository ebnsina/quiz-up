import React, { useState } from 'react';
import Layout from '../components/layouts/Layout';
import CourseCover from '../components/quiz/CourseCover';
import Questionnaire from '../components/quiz/Questionnaire';
import QuizEnd from '../components/quiz/QuizEnd';
import QuizStart from '../components/quiz/QuizStart';

import QUESTIONS from '../data/data.json';

function Homepage() {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [progress, setProgress] = useState(0);

  const handleStartQuiz = () => {
    setStep(2);
  };

  const handleProgress = () => {
    setProgress(progress + 10);
  };

  return (
    <Layout>
      <div className="main-content-grid">
        <CourseCover progress={progress} />
        <div className="main-content-content">
          {step === 1 && <QuizStart onQuizStart={handleStartQuiz} />}
          {step === 2 && (
            <Questionnaire
              data={QUESTIONS.data[activeQuestion]}
              onSetStep={setStep}
              activeQuestion={activeQuestion}
              onSetActiveQuestion={setActiveQuestion}
              onAnswerUpdate={setAnswers}
              questions={QUESTIONS.data}
              onHandleProgress={handleProgress}
            />
          )}
          {step === 3 && <QuizEnd data={QUESTIONS.data} results={answers} />}
        </div>
      </div>
    </Layout>
  );
}

export default Homepage;
