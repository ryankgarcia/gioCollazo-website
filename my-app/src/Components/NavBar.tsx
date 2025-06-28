import { NavLink, Outlet } from 'react-router-dom';
import { IoIosBowtie } from 'react-icons/io';
import './NavBar.css';

export function NavBar() {
  return (
    <div>
      <h2 className="navBarHeader h2">
        <IoIosBowtie /> StyledByGio <IoIosBowtie />{' '}
      </h2>
      <div className="allLinks">
        <div className="nav-row">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <span className="home-link">Home</span>
          </NavLink>
        </div>
        <div className="nav-row">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <span className="aboutMe-link">About</span>
          </NavLink>
        </div>
        <div className="nav-row">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <span className="aboutMe-link">Services</span>
          </NavLink>
        </div>
        <NavLink
          to="/testimonials"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          <span className="testimonials-link">Testimonials</span>
        </NavLink>
        <div className="nav-row">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            <span className="contact-link">Contact</span>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
