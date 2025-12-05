// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Testimonials from './Component/Testimonials';
import Contact from './Component/Contact ';
import Cursor from "./Component/cursur";

function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
