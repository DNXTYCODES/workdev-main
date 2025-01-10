import React from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './header.css'; // Create this file for header-specific styles
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="header">
       <div className="topColumn">
        <div className='mail'>
            <h1>
            <FaEnvelope size={20} color="#333" marginleft={20}/>
            </h1>
        
        <h2 className='HE'> welend@primarykeymtg.com</h2>
        </div>
        <div className='loc'>
            <h1>
            <FaMapMarkerAlt size={20} color="#333" />
            </h1>
       <h2 className='HY'>10 Grand St, Brooklyn, NY 10013, United States</h2>

        </div>
               </div>    
      <div className="container">
        <div>
            <div>
            <h1 className="logo"> <img src="/logo.png" alt="" /></h1>
            </div>
        
        <div class>
            <h1>Primary Key mortgage LLC</h1>
            <h2>Unlocking your future, one door at a time</h2>
        </div>
        </div>
        <div>
        <nav className="navbar">
            <ul className="nav-links">
              {/* Replace <a> with <Link> */}
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Our Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>

        </div> 
    </div>
    </header>
  );
};

export default Header;