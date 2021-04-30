import IctLogo from '../../images/ict.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="footer-grid">
          <div className="footer-widget">
            <h4>About Us</h4>
            <p>
              Upskill is a peer to peer skill sharing platform. It enables
              individuals and organizations to share skills and exchange
              technical knowledge to bridge the skills gap in Bangladesh.
            </p>

            <img src={IctLogo} alt="ict award" />
          </div>
          <div className="footer-widget">
            <h4>Helpful Links</h4>

            <ul>
              <li>
                <a href="#/">FAQ</a>
              </li>
              <li>
                <a href="#/">Terms and Conditions</a>
              </li>
              <li>
                <a href="#/">Privacy Statement</a>
              </li>
              <li>
                <a href="#/">About Upskill</a>
              </li>
            </ul>
          </div>
          <div className="footer-widget">
            <h4>Contact</h4>

            <p>
              Upskill Training Center Flat- 4B, House- 516/3, <br />
              Lane- 10 Baridhara DOHS
            </p>

            <a href="tel:01727234132">01727 234132</a>
            <a href="mailto:sanan.upskill@gmail.com">sanan.upskill@gmail.com</a>
          </div>
          <div className="footer-widget">
            <h4>Subscribe to our newsletter</h4>
            <form>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Type your mail"
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
