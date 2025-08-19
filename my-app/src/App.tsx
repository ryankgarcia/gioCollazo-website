import { Route, Routes } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Testimonials } from './Pages/Testimonials';
import { Contact } from './Pages/Contact';
import { Services } from './Pages/Services';
import { FAQ } from './Pages/FAQ';
import { Gallery } from './Pages/Gallery';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}

export default App;
