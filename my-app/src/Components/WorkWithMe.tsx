import './WorkWithMe.css';

export function WorkWithMe() {
  // the SRC value of the google form is going to change to gio's email address & forms
  // be sure to test a few results
  return (
    <>
      <iframe
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        sandbox="allow-forms allow-scripts allow-same-origin"
        className="form-dimensions"
        title="StyledByGio Contact Form"
        src="https://docs.google.com/forms/d/e/1FAIpQLSfvcjHXEY1mBcdeEIMe9j-W4NVYuuBt27s6D0VO-YBcue2UuA/viewform?usp=header"
      ></iframe>
    </>
  );
}
