import Layout from '../layouts/Layout';
import CourseCover from './CourseCover';

function ReviewAnswer(props) {
  const { results, data } = props.location.state;

  return (
    <Layout>
      <div className="main-content-grid">
        <CourseCover />
        <div className="main-content-content">
          <ul>
            {results.map((result, i) => {
              console.log(result);
              return (
                <li className="single-review-answer" key={i}>
                  <p className="question-numbers">
                    <span className="current-question">Question {i + 1}</span>
                    <span className="total-question"> / {data.length}</span>
                  </p>

                  <h3 className="review-answer-question">{result.q}</h3>
                  {data[i].hasImageQuestion && (
                    <img
                      className="json-question"
                      src={data[i].questionImage}
                      alt=""
                    />
                  )}

                  <div className="review-answer-images-group">
                    {result.hasImageAnswer && (
                      <div
                        className={`review-answer-image ${
                          result.a === data[i].answer
                            ? 'check-right'
                            : 'check-wrong'
                        }`}
                      >
                        <img src={result.a} alt="" />
                      </div>
                    )}

                    {result.hasImageAnswer && result.a !== data[i].answer && (
                      <div className="review-answer-image check-right">
                        <img
                          style={{ borderRadius: '16px' }}
                          src={data[i].answer}
                          alt=""
                        />
                      </div>
                    )}
                  </div>

                  {!result.hasImageAnswer && (
                    <div>
                      <p
                        className={`${
                          result.a === data[i].answer ? 'box-green' : 'box-red'
                        }`}
                      >
                        {result.a}
                      </p>
                    </div>
                  )}

                  {!result.hasImageAnswer && result.a !== data[i].answer && (
                    <p className="box-green">{data[i].answer}</p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default ReviewAnswer;
