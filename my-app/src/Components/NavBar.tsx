import { IoIosBowtie } from "react-icons/io";
import './NavBar.css';

export function NavBar() {
    return (
        <div>
     <h2 className='navBar'> {<IoIosBowtie />}Styled By Gio{<IoIosBowtie />}</h2>
     <h3>This is the first line. . .</h3>
     {/* <Outlet /> */}
     </div>
    )    
}