import './WorkWithMe.css';

export function WorkWithMe() {
  return (
    <>
      <h2 className="workWMe-header">Hello. Welcome.</h2>
      <h3 className="second-header">
        Please enter your information below to receive a phone call so we can
        discuss how I can help you.
      </h3>
      <form>
        <label htmlFor="first-name">First Name (required)</label>
        <input id="first-name" type="text" required />

        <label htmlFor="last-name">Last Name</label>
        <input id="last-name" type="text" />

        <label htmlFor="email">Email (required)</label>
        <input id="email" type="email" required />

        <label htmlFor="phone-number">Phone Number (required)</label>
        <input id="phone-number" type="text" required />

        <label htmlFor="message">Message</label>
        <input id="message" type="textbox" />

        <button>Submit</button>
      </form>
    </>
  );
}
