import React, { useEffect, useRef, useState } from 'react';

function Questionnaire({
  data,
  onSetStep,
  activeQuestion,
  onSetActiveQuestion,
  onAnswerUpdate,
  questions,
  onHandleProgress,
}) {
  const [seletcted, setSelected] = useState('');
  const [error, setError] = useState('');
  const choicesWrapper = useRef();

  useEffect(() => {
    const findCheckedInput = choicesWrapper.current.querySelector(
      'input:checked'
    );
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const handleClick = (e) => {
    const target = e.target;
    console.log(target);
    setSelected(target.src || target.value);
    if (error) setError('');
  };

  const handleNextQuestion = (e) => {
    if (seletcted === '') return setError('please select a option!');

    const checkImageFile = /\.(gif|jpg|jpeg|tiff|png)$/i.test(seletcted);

    onAnswerUpdate((prevState) => [
      ...prevState,
      {
        q: data.question,
        a: seletcted,
        hasImageAnswer: checkImageFile,
        hasImageQuestion: true,
      },
    ]);

    setSelected('');

    if (activeQuestion < questions.length - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  return (
    <>
      <p>
        <span className="current-question">Question {data.id}</span>
        <span className="total-question"> / {questions.length}</span>
      </p>

      <h4 className="question">{data.question}</h4>

      {data.hasImageQuestion && (
        <img className="json-question" src={data.questionImage} alt="" />
      )}

      <div ref={choicesWrapper}>
        <div className="question-images">
          <div
            className={`questions-images ${
              data.hasImageQuestion ? 'has-1-grid' : 'has-3-grid'
            }`}
          >
            {data.hasImageAnswer &&
              data.choices.map((choice, idx) => (
                <div key={idx} className="radio-wrapper radio-wrapper-image">
                  <input
                    id={choice}
                    type="radio"
                    name="answer"
                    value={choice}
                    onClick={handleClick}
                  />

                  <label htmlFor={choice}>
                    <img src={choice} alt="" />
                  </label>
                </div>
              ))}
          </div>
        </div>

        {!data.hasImageAnswer &&
          data.choices.map((choice, idx) => {
            return (
              <div key={idx} className="radio-wrapper radio-wrapper-box">
                <input
                  id={choice}
                  type="radio"
                  name="answer"
                  value={choice}
                  onClick={handleClick}
                />
                <label className="box" htmlFor={choice}>
                  {choice}
                </label>
              </div>
            );
          })}
      </div>

      {error && <p className="error-message">{error}</p>}

      <button
        type="button"
        onClick={onHandleProgress}
        className="btn btn-primary"
      >
        Submit
      </button>

      <button className="btn-link" onClick={handleNextQuestion}>
        Next{' '}
        <i aria-label="next arrow" className="fas fa-long-arrow-alt-right"></i>
      </button>
    </>
  );
}

export default Questionnaire;
