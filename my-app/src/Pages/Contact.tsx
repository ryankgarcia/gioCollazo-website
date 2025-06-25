import { WorkWithMe } from '../Components/WorkWithMe - Form';
import './Contact.css';

export function ContactPage() {
  return (
    <div className="contactPage-container">
      <div className="contact-row">
        <div className="contact-column-full">
          <h2 className="workWMe-header">Hello. Welcome.</h2>
        </div>
      </div>
      <div className="contact-row">
        <div className="contact-column-full">
          <h3 className="second-header">
            Please enter your information below to receive a phone call so we
            can discuss how I can help you.
          </h3>
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
        <WorkWithMe />
      </div>
    </div>
  );
}
