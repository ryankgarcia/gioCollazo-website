import { NavLink, Outlet } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';
import './CommonComponentCss.css';
import './NavBar.css';

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen(): void {
    setIsOpen((prev) => !prev);
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleOpen}
        className="navBarHeader hamburger-menu"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        aria-controls="all-links"
      >
        <BiMenu aria-hidden="true" />
        <div className="nav-column-full">StyledByGio</div>
      </button>
      <div id="all-links" className={`allLinks ${isOpen ? 'open' : ''}`}>
        <div>
          <NavLink to="/" end className="home-link">
            <span>Home</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/about" className="aboutMe-link">
            <span>About</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/services" className="services-link">
            <span>Services</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/testimonials" className="testimonials-link">
            <span>Testimonials</span>
          </NavLink>
        </div>
        <div>
          <NavLink to="/contact" className="contact-link">
            <span>Contact</span>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
