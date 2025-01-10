import React from 'react';
import LoanForm from '../../loanform';
import './service.css';


const Service = () => {
  return (
    <div className="service">
       <h1 className='servHead'>Services</h1>

       <h2>Mortgage Calculator</h2>

       <div>
        
       </div>
       <div>
        <h1>
        Monthly Payment

        <LoanForm />
        </h1>

        <div>
            <button className='clear'>Clear</button>
            <button className='clear'>Calculate</button>
        </div>
       </div>
        
       <div className='contact2'>
        <h1>email:welend@primarykeymtg.com</h1>
        <h1>Phone:  +1 704 284 7454 </h1>
       </div>
    </div>
  );
};

export default Service;