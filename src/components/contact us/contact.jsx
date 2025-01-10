import React, { useState } from 'react';
import './Contact.css'; // Create a CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email) {
      setFormStatus('Please fill out all fields.');
      return;
    }

    // You can replace this with an API call or email sending logic
    setFormStatus('Thank you! We have received your message.');
    setFormData({ name: '', email: '' }); // Reset form fields
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
        {formStatus && <p className="form-status">{formStatus}</p>}
      </form>

      <div className='contact2'>
        <h1>email:welend@primarykeymtg.com</h1>
        <h1>Phone:  +1 704 284 7454 </h1>
       </div>
    </div>
  );
};

export default Contact;
