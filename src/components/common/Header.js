import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/upskill.svg';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navClasses = isMenuOpen ? 'slide-in' : '';

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="header-inner">
          <Link to="/" className="logo">
            <Logo />
          </Link>

          <button
            onClick={handleMenuToggle}
            aria-label="toggle menu"
            className="toggle-menu"
          >
            <i aria-label="hamburger icon" className="fas fa-bars"></i>
          </button>

          <div className={`mobile-nav ${navClasses}`}>
            <div
              onClick={() => setMenuOpen(false)}
              aria-label="menu close"
              className="menu-close"
            >
              &times;
            </div>

            <nav>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/training">Training</NavLink>
                </li>
                <li>
                  <NavLink to="/video">Video</NavLink>
                </li>
                <li>
                  <NavLink to="/lessions">Lessions</NavLink>
                </li>
                <li>
                  <NavLink to="/earn-with-upskill">Earn With Upskill</NavLink>
                </li>
              </ul>
            </nav>

            <div className="auth-nav">
              <ul>
                <li>
                  <NavLink to="/signin">Sign In</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Sign Up</NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="desktop-nav">
            <nav>
              <ul>
                <li>
                  <NavLink className="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/training">Training</NavLink>
                </li>
                <li>
                  <NavLink to="/video">Video</NavLink>
                </li>
                <li>
                  <NavLink to="/lessions">Lessions</NavLink>
                </li>
                <li>
                  <NavLink to="/earn-with-upskill">Earn With Upskill</NavLink>
                </li>
              </ul>
            </nav>

            <div className="auth-nav">
              <ul>
                <li>
                  <NavLink to="/signin">Sign In</NavLink>
                </li>
                <li>
                  <NavLink to="/signup">Sign Up</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
