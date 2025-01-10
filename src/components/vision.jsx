import React from 'react';
import './vision.css'; // CSS file for the vision section

const Vision = () => {
  return (
    <section className="vision-section">
      <div className="vision-container">
        {/* Text Section */}
        <div className="vision-text">
          <h2>Our Vision</h2>
          <p>
          To be the premier mortgage company, revolutionizing the industry through innovation, exceptional service, and unparalleled customer experiences. We envision a future where homeownership is accessible and affordable for all, and where our expertise and guidance empower individuals and families to achieve their financial dreams.
          </p>
          <p>
          We strive to be the trusted partner in our clients' financial journeys, and to create a legacy of strengthening communities and fostering long-term prosperity.   </p>
        </div>

        {/* Image Section */}
        <div className="vision-image">
          <img src="/img3.png" alt="Our vision" />
        </div>
      </div>
    </section>
  );
};

export default Vision;
