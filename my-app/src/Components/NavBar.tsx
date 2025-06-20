
import { NavLink, Outlet } from "react-router-dom";
import { IoIosBowtie } from "react-icons/io";
import './NavBar.css';

export function NavBar() {
    return (
        <div>
     <h2 className='navBarHeader h2'> <IoIosBowtie />  StyledByGio  <IoIosBowtie /> </h2>
     <div className="allLinks">
     <NavLink to='/' className={({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'}><span className="home-link">Home</span>
     </NavLink >
     <NavLink to='/about' className={({ isActive }) => 
     isActive ? 'nav-link active': 'nav-link'}><span className="aboutMe-link">About Me</span></NavLink>
     <NavLink to='/testimonials' className={({ isActive }) => 
     isActive ? 'nav-link active': 'nav-link'}><span className="testimonials-link">Testimonials</span></NavLink>
     <NavLink to='/workwithme' className={({ isActive }) => 
     isActive ? 'nav-link active': 'nav-link'}><span className="workWithMe-link">Work With Me</span></NavLink>
     </div>
     <Outlet />
     </div>
    )    
}