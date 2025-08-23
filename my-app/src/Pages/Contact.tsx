import { Footer } from '../Components/Footer';
import { WorkWithMe } from '../Components/WorkWithMe';
import './PagesCssInCommon.css';
import './Contact.css';

export function Contact() {
  return (
    <div className="page-container">
      <h2 className="header-element text-center">Hello.</h2>
      <h2 className="header-element text-center">Welcome.</h2>
      <div className="contact-row">
        <div className="column-full">
          <h3 className="second-header text-center">
            Please enter your information below so we can discuss how I can
            help.
          </h3>
        </div>
        <div className="contact-row">
          <div className="column-full">
            <WorkWithMe />
          </div>
        </div>
      </div>
      <div className="contact-row">
        <div className="image-center">
          <img
            src="/Gio-hotel-seated.jpg"
            alt="Giovanny Collazo - Professional Wardrobe Stylist"
            className="contact-gio-collazo-image"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
