import { Route, Routes } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { HomePage } from './Pages/HomePage';
import { AboutMe } from './Pages/AboutMe';
import { Testimonials } from './Pages/Testimonials';
import { ContactPage } from './Pages/Contact';
import { Services } from './Pages/Services';
import { FAQ } from './Pages/FAQ';
import { Gallery } from './Pages/Gallery';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}

export default App;
