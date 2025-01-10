import React from 'react';
import './mission.css'; // CSS file for the mission section

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="mission-container">
        {/* Image Section */}
        <div className="mission-image">
          <img src="/img 2.jpeg" alt="Our mission" />
        </div>

        {/* Text Section */}
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
          Our mission at Primary Key mortgage LLC is to revolutionize the mortgage industry by delivering exceptional customer experiences, innovative financial solutions, and unparalleled expertise. We are committed to empowering individuals and families to achieve their dreams of homeownership and financial stability, while building long-term relationships founded on trust, transparency, and integrity. 
          </p>
          <p>
          Through cutting-edge technology and a customer-centric approach, we strive to make the mortgage process seamless, efficient, and personalized. Our dedication to excellence, passion for innovation, and unwavering commitment to our clients drive us to redefine the mortgage experience and create a brighter financial future for all.          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
