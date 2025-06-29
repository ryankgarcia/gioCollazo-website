// import { useState, type FormEvent } from 'react';
import './WorkWithMe.css';

export function WorkWithMe() {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [message, setMessage] = useState('');

  // function handleSubmit(event: FormEvent<HTMLFormElement>): void {
  //   console.log('button clicked!!');
  //   event.preventDefault();
  // }

  return (
    <>
      <form className="form-container">
        <div className="workWMe-row">
          <label htmlFor="first-name">First Name (required)</label>
          <label htmlFor="last-name" id="LN-label-spacing-left">
            Last Name
          </label>
        </div>
        <div className="workWMe-row">
          <input id="first-name" type="text" className="input-field" required />
          <input id="last-name" type="text" className="input-field" />
        </div>
        <div className="workWMe-row">
          <label htmlFor="email">Email (required)</label>
          <label htmlFor="phone-number" className="phone-number-label">
            Phone Number (required)
          </label>
        </div>
        <div className="workWMe-row">
          <input id="email" type="email" className="input-field" required />
          <input
            id="phone-number"
            type="text"
            className="input-field"
            required
          />
        </div>

        <div className="workWMe-row">
          <label htmlFor="message">Message</label>
        </div>
        <div className="workWMe-row">
          <input id="message" type="textbox" className="input-field" />
        </div>

        <div className="workWMe-row">
          <div className="workWMe-column-half">
            <button className="form-submit-button">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
}
