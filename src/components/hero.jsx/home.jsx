import React from 'react';
import './hero.css'; // Create this file for header-specific styles
import ContactForm from '../contactForm';
import Mission from '../mission';
import Vision from '../vision';
import Testimony from '../testimony/testimony';

const Home = () => {
  return (
    <div className="home">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Company Logo" />
        </div>
        <div className="hero-content">
          <h1>Welcome to Primary Key mortgage LLC</h1>
          <p>Your trusted partner in home financing</p>
          <button className="cta-btn">Contact Us</button>
        </div>
      </header>
        <section>
            <Mission />
        </section>
        <section>
            <Vision />
        </section>
      {/* Main Content Section */}
      <section className="services">
        <h2>Our Loan Programs</h2>
        <div className="loan-cards">
          <div className="loan-card">
            <h3>Fixed Rate Loan</h3>
            <p>Interest rate: 7% - 7.9%</p>
            <p>LTV: 80%</p>
            <p>Processing duration: 5-10 working days</p>
          </div>
          <div className="loan-card">
            <h3>Conventional Loans</h3>
            <p>Interest rate: 7.4%</p>
            <p>LTV: 80%-90%</p>
            <p>Processing duration: 5-10 working days</p>
          </div>
          <div className="loan-card">
            <h3>Fix and Flip Loans</h3>
            <p>Interest rates: 8%-12%</p>
            <p>LTV: 80%-90%</p>
            <p>Processing duration: 5-10 working days</p>
          </div>
          <div className="loan-card">
            <h3>Construction loan</h3>
            <p>Interest rates: 5%-6%</p>
            <p>LTV: 70%-85%</p>
            <p>Processing duration: 7-12 working days</p>
          </div>
        </div>
      </section>

      {/* Get Pre-approved Section */}
      <section className="get-pre-approved">
        <h2>Get Pre-approved for a Loan</h2>
        <ContactForm />
      </section>

      <section>
        <Testimony />
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Primary Key mortgage LLC. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
