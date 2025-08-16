import './CommonComponentCss.css';
import './Footer.css';
import { PiInstagramLogo } from 'react-icons/pi';
import { CgMail } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { FaSquareWhatsapp } from 'react-icons/fa6';

// the last thing to complete before the site 'goes live' on the web,
// the mailto should change to a more legitimate email (with the domain after the @ symbol)

export function Footer() {

  return (
    <>
      <div className="link-icon-container">
        <div className="footer-flex-row">
          <div className="link-column-full">
        <div className='flex-dir-col'>
            <h2 className="footer-h2">Quick Links</h2>
            <div className="text-margin-bottom">
              <Link to="/contact" className="contact-footer">
                Contact
              </Link>
            </div>
            <div className="text-margin-bottom">
              <Link to="/gallery" className="gallery-footer">
                Gallery
              </Link>
            </div>
            <div className="text-margin-bottom">
              <Link to="/FAQ" className="FAQ-footer">
                FAQ
              </Link>
              </div>
            </div>
          </div>
          <div className="link-column-full">
            <h2 className="footer-h2">Stay Connected</h2>
            <div className="icon-group">
              <a
                className="circle-icon icon-center"
                href="https://www.instagram.com/styledbygio?igsh=MTJwa2w4em1tZm84Zg=="
                target="_blank"
              >
                <PiInstagramLogo className="insta-logo" />
              </a>
              <a
                className="circle-icon icon-center"
                href="https://wa.me/18186338346?text=Hola%20Giovanny%2C%20miré%20tu%20página%20de%20web.%20Envíame%20información%20sobre%20tus%20servicios%20profesionales."
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareWhatsapp className="whatsapp-logo" />
              </a>
              {/* this mailto link must change to the name of
        domain name. Ex: giovanny@styledbygio.com.
        for example purposes this will do, but it must change once
        the domain has been claimed*/}
              <a
                className="circle-icon icon-center"
                href="mailto:styledbygio4@gmail.com"
              >
                <CgMail className="mail-logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-flex-row">
        <div className="copyright-column-full">
          <p className="copyright-text">
            © 2025 <em> Giovanny Collazo</em>. All Rights Reserved. Website
            Design by <em>Ryan Garcia</em>.
          </p>
        </div>
      </div>
    </>
  );
}
