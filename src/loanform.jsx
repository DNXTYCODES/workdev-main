import React, { useState } from 'react';
import './loanform.css';

const LoanForm = () => {
  const [formData, setFormData] = useState({
    apr: '',
    loanTerm: '',
    loanAmount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add additional submission logic heree
  };

  return (
    <form onSubmit={handleSubmit} className="loan-form">
      <div className="form-group">
        <label htmlFor="apr">
          APR (%)<span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="number"
          id="apr"
          name="apr"
          min="0"
          max="25"
          step="0.01"
          value={formData.apr}
          onChange={handleChange}
          placeholder="0.00-25.00"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="loanTerm">
          Loan Term (Years)<span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="number"
          id="loanTerm"
          name="loanTerm"
          min="1"
          max="40"
          value={formData.loanTerm}
          onChange={handleChange}
          placeholder="1-40"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="loanAmount">
          Loan Amount<span style={{ color: 'red' }}>*</span>
        </label>
        <input
          type="text"
          id="loanAmount"
          name="loanAmount"
          value={formData.loanAmount}
          onChange={handleChange}
          placeholder="$"
          required
        />
      </div>

    </form>
  );
};

export default LoanForm;