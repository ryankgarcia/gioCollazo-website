import { WorkWithMe } from '../Components/WorkWithMe - Form';
import './Contact.css';

export function ContactPage() {
  return (
    <div className="contactPage-container">
      <img
        src="/gio-hotel-flex.jpg"
        alt="Giovanny Collazo Professional Stylist image"
      />
      <div className="contact-row">
        <div className="contact-column-full">
          <WorkWithMe />
        </div>
      </div>
    </div>
  );
}
