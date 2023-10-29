import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Define your components for different routes
import Home from './components/HomePage';
import AboutUs from './components/AboutUs';
import Features from './components/Features';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/features" element={<Features />} />
      </Routes>
    </Router>
  );
};

export default App;
