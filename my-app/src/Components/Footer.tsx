import { PiInstagramLogo } from 'react-icons/pi';
import { CgMail } from 'react-icons/cg';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaSquareWhatsapp } from 'react-icons/fa6';

export function Footer() {
  return (
    <div className="footer-container">
      <h2 className="footer-h2">Quick Links</h2>
      <div className="quick-linksGroup">
        <div className="footer-row">
          <Link to="/contact" className="contact-button">
            Contact
          </Link>
        </div>
        <div className="footer-row">
          <Link to="/FAQ" className="FAQ-button">
            FAQ
          </Link>
        </div>
      </div>
      <div className="footer-row">
        <h2 className="footer-h2">Stay Connected</h2>
        <div className="link-group">
          <a
            className="circle-icon"
            href="https://www.instagram.com/styledbygio?igsh=MTJwa2w4em1tZm84Zg=="
            target="_blank"
          >
            <PiInstagramLogo className="insta-logo" />
          </a>
          <a
            className="circle-icon"
            href="https://wa.me/18186338346?text=Hi%20Giovanny%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20professional%20styling%20services."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareWhatsapp className="whatsapp-logo" />
          </a>
          {/* this mailto link must change to the name of
        domain name. Ex: giovanny@styledbygio.com.
        for example purposes this will do, but it must change once
        the domain has been claimed*/}
          <a className="circle-icon" href="mailto:styledbygio4@gmail.com">
            <CgMail className="mail-logo" />
          </a>
        </div>

        <div className="footer-row">
          <p className="copyright-footer">
            © 2025 <em>Giovanny Collazo</em>. All Rights Reserved. Website
            Design by <em>Ryan Garcia</em>.
          </p>
        </div>
      </div>
    </div>
  );
}
