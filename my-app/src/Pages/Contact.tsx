import { Footer } from '../Components/Footer';
import { WorkWithMe } from '../Components/WorkWithMe - Form';
import './Contact.css';

export function ContactPage() {
  return (
    <div className="contactPage-container">
      <h2 className="workWMe-header">Hello.</h2>
      <h2 className="workWMe-header">Welcome.</h2>
      <div className="contact-row">
        <div className="contact-column-full">
          <h3 className="second-header">
            Please enter your information below so we can discuss how I can
            help.
          </h3>
        </div>
        <div className="contact-row">
          <div className="contact-column-full">
            <WorkWithMe />
          </div>
        </div>
      </div>
      <div className="contact-row">
        <div className="stylist-image-container">
          <img
            src="/gio-hotel-flex.jpg"
            alt="Giovanny Collazo Professional Stylist image"
            className="contact-gio-collazo-image"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
