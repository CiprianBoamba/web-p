import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
