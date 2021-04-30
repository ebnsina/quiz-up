function CourseCover({ progress }) {
  return (
    <div className="main-content-image">
      <div className="topic-progress">
        <label htmlFor="progress" className="sr-only">
          Quiz Steps
        </label>
        <progress id="progress" value={progress} max="100">
          <span className="progress-bar"></span>
        </progress>
      </div>

      <div className="topic-wrapper">
        <div className="topic-details">
          <div className="topic-badge">Graphic Design</div>

          <h2 className="topic-title">
            Photoshop Quiz <br />
            Questions And Answers
          </h2>
          <p className="topic-excerpt">
            A short quiz to test how well you know <br />
            Adobe Photoshop
          </p>
        </div>

        <div className="topic-meta">
          <div>
            <h4>By Bappi Ashraf</h4>
            <time title="Oct 9th, 06:03:11 PM">Oct 9th, 06:03:11 PM</time>
          </div>
          <ul className="topic-social">
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
      </div>
    </div>
  );
}

export default CourseCover;
