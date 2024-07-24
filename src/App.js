import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home.js';
import About from './components/pages/About/About.js';
import Academics from './components/pages/Academics/Academics.js';
import Admissions from './components/pages/Admissions/Admissions.js';
import Faculty from './components/pages/Faculty/Faculty.js';
import Students from './components/pages/Students/Students.js';
import Gallery from './components/pages/Gallery/Gallery.js';
import Contact from './components/pages/Contact/Contact.js';
import NavBar from './components/pages/NavBar/NavBar.js';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </Router>
  );
}

export default App;



