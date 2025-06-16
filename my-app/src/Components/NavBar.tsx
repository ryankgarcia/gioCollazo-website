import { NavLink, Outlet } from "react-router-dom";
import { IoIosBowtie } from "react-icons/io";
import './NavBar.css';

export function NavBar() {
    return (
        <div>
     <h2 className='navBar'> <IoIosBowtie />  Styled By Gio  <IoIosBowtie /> </h2>
     <NavLink to='/' className={({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link'}><span>Home</span>
     </NavLink >
     <NavLink to='/about' className={({ isActive }) => 
     isActive ? 'nav-link active': 'nav-link'}><span>About Me</span></NavLink>
     <Outlet />
     </div>
    )    
}