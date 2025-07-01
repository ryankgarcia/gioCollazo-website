import { NavLink, Outlet } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import './NavBar.css';
import { useState } from 'react';

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen(): void {
    setIsOpen((prev) => !prev);
  }

  return (
    <div>
      <div onClick={handleOpen} className="navBarHeader h2">
        <BiMenu /> StyledByGio
      </div>
      <div className={`allLinks ${isOpen ? 'open' : ''}`}>
        <div className="nav-row">
          <NavLink to="/">
            <span className="home-link">Home</span>
          </NavLink>
        </div>
        <div className="nav-row">
          <NavLink to="/about">
            <span className="aboutMe-link">About</span>
          </NavLink>
        </div>
        <div className="nav-row">
          <NavLink to="/services">
            <span className="aboutMe-link">Services</span>
          </NavLink>
        </div>
        <NavLink to="/testimonials">
          <span className="testimonials-link">Testimonials</span>
        </NavLink>
        <div className="nav-row">
          <NavLink to="/contact">
            <span className="contact-link">Contact</span>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
