import React from 'react';
import heroimg from '../assets/images/Group77.png';

import './../assets/styles/hero.css';

function Content() {
  return (
    <div className='hero-content'>
      <img src={heroimg} alt='hero image' />
      <div className='main-text'>
        <h1 className='hero-text'>Online Experiences</h1>
        <p className='hero-para'>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Content;
