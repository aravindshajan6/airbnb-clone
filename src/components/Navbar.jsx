import React from 'react';
import './../assets/styles/navbar.css';
import airbnblogo from '../assets/images/airbnb1.png';

function Navbar() {
  return (
    <div className='container'>
      <img src={airbnblogo} alt='logo' />
    </div>
  );
}

export default Navbar;
