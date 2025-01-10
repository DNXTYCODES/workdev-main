import React from 'react';
import './testimony.css'; // CSS file for the testimony section

const Testimony = () => {
  const testimonials = [
    {
      text: "I just closed on my dream home and couldn't have done it without Primary Key Mortgage. Their team was professional, responsive, and made the entire process seamless.",
      author: "Vati Testo",
    },
    {
      text: "I was hesitant to refinance my mortgage, but they walked me through every step and saved me thousands in interest. Highly recommend!",
      author: "Anonymous",
    },
    {
      text: "As a first-time homebuyer, I was overwhelmed, but their expertise and guidance made it easy. I can't thank them enough.",
      author: "May Philips",
    },
    {
      text: "I was skeptical about online mortgage lenders, but PKM exceeded my expectations. Fast, efficient, and great rates.",
      author: "Michelle R.",
    },
    {
      text: "I was struggling with my mortgage payments, but Primary Key helped me modify my loan and saved me from foreclosure. They truly care about their clients.",
      author: "Kelly Morgans",
    },
  ];

  return (
    <section className="testimony-section">
      <h2 className="testimony-title">What Do Our Clients Have to Say About Us?</h2>
      <div className="testimony-container">
        {testimonials.map((testimony, index) => (
          <div key={index} className="testimony-card">
            <p className="testimony-text">"{testimony.text}"</p>
            <h4 className="testimony-author">- {testimony.author}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimony;
