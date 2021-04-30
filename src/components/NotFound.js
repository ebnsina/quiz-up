import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h2>404</h2>
      <h3>OOPS! PAGE NOT FOUND.</h3>
      <p>
        Sorry but the page you are looking for does not exist, have been
        removed. name changed or is temporarily unavailable
      </p>
      <Link to="/">Back to homepage</Link>
    </div>
  );
}

export default NotFound;
