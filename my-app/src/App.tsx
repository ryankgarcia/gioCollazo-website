import { Route, Routes } from 'react-router-dom'
import { NavBar } from './Components/NavBar'
import { HomePage } from './Pages/HomePage'
import { AboutMe } from './Pages/About'
import './App.css'

function App() {

  return (
     <Routes>
        <Route path='/' element={<NavBar />}>
        <Route index element={<HomePage />}/>
        <Route path='/about' element={<AboutMe />}/>
        </Route>
    </Routes>
  )
}

export default App
