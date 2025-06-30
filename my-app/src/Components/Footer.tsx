import { PiInstagramLogo } from 'react-icons/pi';
import { CgMail } from 'react-icons/cg';
import './Footer.css';

export function Footer() {
  return (
    <div className="footer-container">
      <h2>Footer Starter Element ! !</h2>
      <div className="footer-row">
        <a
          href="https://www.instagram.com/styledbygio?igsh=MTJwa2w4em1tZm84Zg=="
          target="_blank"
        >
          <PiInstagramLogo className="insta-logo" />
        </a>
        {/* this mailto link must change to the name of
        domain name. Ex: giovanny@styledbygio.com.
        for example purposes this will do, but it must change once
        the domain has been claimed*/}
        <a href="mailto:styledbygio4@gmail.com">
          <CgMail className="mail-logo" />
        </a>
      </div>
    </div>
  );
}
