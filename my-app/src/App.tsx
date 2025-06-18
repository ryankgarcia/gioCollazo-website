import { Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { AboutMe } from './Pages/AboutMe'
import { NavBar } from './Components/NavBar'
import { Testimonials } from './Pages/Testimonials'
import './index.css'


function App() {

  return (
     <Routes>
        <Route path='/' element={<NavBar />}>
        <Route index element={<HomePage />}/>
        <Route path='/about' element={<AboutMe />}/>
        <Route path='/testimonials' element={<Testimonials />}/>
        </Route>
    </Routes>
  )
}

export default App
