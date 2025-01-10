import React, { useState } from 'react';
import './contactForm.css';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    loanAmount: '',
    loanType: '',
    propertyUnderContract: '',
    propertyAddress: '',
    estimatedClosingDate: '',
    dealDetails: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_ncfmd6h', // Replace with your EmailJS service ID
        'template_fopbtuh', // Replace with your EmailJS template ID
        formData, // Pass form data
        'DJdq9AOFr5ctSlVFq' // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          alert('Email sent successfully!');
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          alert('Failed to send email.');
          console.log('FAILED...', error);
        }
      );

    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      loanAmount: '',
      loanType: '',
      propertyUnderContract: '',
      propertyAddress: '',
      estimatedClosingDate: '',
      dealDetails: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email Address:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Loan Amount:
        <input
          type="text"
          name="loanAmount"
          value={formData.loanAmount}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Loan Type:
        <select
          name="loanType"
          value={formData.loanType}
          onChange={handleChange}
          required
        >
          <option value="">Select Loan Type</option>
          <option value="Conventional Loan">Conventional Loan</option>
          <option value="Construction Loan">Construction Loan</option>
          <option value="Fix and Flip Loan">Fix and Flip Loan</option>
          <option value="Fix and Hold Loan">Fix and Hold Loan</option>
          <option value="Rental Loan">Rental Loan</option>
          <option value="Others">Others</option>
        </select>
      </label>
      <label>
        Property Under Contract?:
        <select
          name="propertyUnderContract"
          value={formData.propertyUnderContract}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>
      <label>
        Address of Property:
        <input
          type="text"
          name="propertyAddress"
          value={formData.propertyAddress}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Estimated Closing Date:
        <input
          type="date"
          name="estimatedClosingDate"
          value={formData.estimatedClosingDate}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Tell Us About the Deal:
        <textarea
          name="dealDetails"
          value={formData.dealDetails}
          onChange={handleChange}
          required
        ></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
