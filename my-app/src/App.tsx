import { Route, Routes } from 'react-router-dom'
import { NavBar } from './Components/NavBar'
import { HomePage } from './Pages/HomePage'
import { AboutMe } from './Pages/AboutMe'
import { Testimonials } from './Pages/Testimonials'
import { ContactPage } from './Pages/Contact'
import './index.css'


function App() {

  return (
     <Routes>
        <Route path='/' element={<NavBar />}>
        <Route index element={<HomePage />}/>
        <Route path='/about' element={<AboutMe />}/>
        <Route path='/testimonials' element={<Testimonials />}/>
        <Route path='/contact' element={<ContactPage />}/>
        </Route>
    </Routes>
  )
}

export default App
