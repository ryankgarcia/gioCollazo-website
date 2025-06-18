
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { AboutMe } from './Pages/AboutMe'
import { Testimonials } from './Pages/Testimonials'
import { WorkWithMe } from './Pages/WorkWithMe'
import { NavBar } from './Components/NavBar'
import './index.css'


function App() {

  return (
     <Routes>
        <Route path='/' element={<NavBar />}>
        <Route index element={<HomePage />}/>
        <Route path='/about' element={<AboutMe />}/>
        <Route path='/testimonials' element={<Testimonials />}/>
        <Route path='/workwithme' element={<WorkWithMe />}/>
        </Route>
    </Routes>
  )
}

export default App
