import { useState, type FormEvent } from 'react';
import './WorkWithMe.css';

export function WorkWithMe() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log({ firstName, lastName, email, phoneNumber, message });
  }

  return (
    <>
      <form
        method="POST"
        data-email=""
        action=""
        className="gform form-container"
        onSubmit={handleSubmit}
      >
        <div className="workWMe-row">
          <label htmlFor="first-name">
            First Name (required)
            <input
              id="first-name"
              type="text"
              name="firstName"
              className="input-field"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="workWMe-row">
          <label htmlFor="last-name" id="LN-label-spacing-left">
            Last Name
            <input
              id="last-name"
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="input-field"
            />
          </label>
        </div>
        <div className="workWMe-row">
          <label htmlFor="email">
            Email (required)
            <input
              id="email"
              type="email"
              name="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="workWMe-row">
          <label htmlFor="phone-number" className="phone-number-label">
            Phone Number (required)
            <input
              id="phone-number"
              type="text"
              name="phoneNumber"
              className="input-field"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="workWMe-row">
          <label htmlFor="message">
            Message
            <input
              id="message"
              type="textbox"
              name="message"
              className="input-field"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <div className="workWMe-row">
          <div className="workWMe-column-half">
            <button type="submit" className="form-submit-button">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
