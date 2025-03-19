import React from 'react';
import heroImage from '../assets/images/hero-image.jpg';
import './Hero.css'; // This line should now work

function Hero() {
  return (
    <div className="hero">
      <img src={heroImage} alt=''/>
      <div className="hero-content">
        <h1>Your Landing Page Title</h1>
        <p>A catchy description of your product or service.</p>
      </div>
    </div>
  );
}

export default Hero;