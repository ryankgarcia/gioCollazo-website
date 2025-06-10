import { Route, Routes } from "react-router-dom";
import { AboutMe } from "./Pages/About";
import { HomePage } from "./Pages/HomePage";
import { NavBar } from "./Components/NavBar";


export default function App(){
    <Routes>
        <Route path='/' element={<NavBar />}>
        <Route index element={<HomePage />}/>
        <Route path='/about' element={<AboutMe />}/>
        </Route>
    </Routes>
}