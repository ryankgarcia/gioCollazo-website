import { useState, type FormEvent } from 'react';
import './WorkWithMe.css';

export function WorkWithMe() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    e.stopPropagation();
    fetch('https://formcarry.com/s/q1fwXBoBDSA', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert('We received your submission, thank you!');
        } else if (response.code === 422) {
          setError(response.message);
        } else {
          setError(response.message);
        }
      })
      .catch((error) => {
        setError(error.message ? error.message : error);
      });
    // line of separation
    console.log({ firstName, lastName, email, phoneNumber, message });
    // right here will be a React Pop up that shows the user the form was successfully submitted
    // and show Gio's confidentiality agreement
  }

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
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
            Last Name (required)
            <input
              id="last-name"
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="input-field"
              required
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
            <textarea
              id="message"
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
      {error && <div className="form-error">{error}</div>}
    </>
  );
}
