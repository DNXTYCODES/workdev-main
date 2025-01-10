import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing components
import Header from './components/header/header.jsx'; // Navigation header
import Footer from './components/footer/footer.jsx'; // Footer
import Home from './components/hero.jsx/home.jsx'; // Home page
import About from './components/about/about.jsx'; // About page
import Services from './components/our service/service.jsx'; // Services page
import Contact from './components/contact us/contact.jsx'; // Contact page

// Define App component
const App = () => {
  return (
    <Router>
      {/* Components that are present on all pages */}
      <Header />

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer appears on all pages */}
      <Footer />
    </Router>
  );
}

export default App;  // Default export
