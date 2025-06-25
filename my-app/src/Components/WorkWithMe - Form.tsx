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
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <label htmlFor="">
          <input type="text" />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
