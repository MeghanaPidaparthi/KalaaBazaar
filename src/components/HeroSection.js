import React from 'react';
import hero from '../assets/hero.png';
import { Link } from 'react-router-dom';
const KalaaBazaarSection = () => {
  const sectionStyle = {
    backgroundImage: `url(${hero})`, // Add the correct image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#FFFDC7',
    textAlign: 'center',
    fontFamily: "'Fraunces', serif",
  };

  const headingStyle = {
    fontSize: '5rem',
    margin: '0',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    margin: '10px 0 20px 0',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
  };

  const buttonStyle = {
    padding: '10px 30px',
    backgroundColor: '#FFFDC7',
    color: '#000',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={sectionStyle}>
      <h1 style={headingStyle}>KalaaBazaar</h1>
      <p style={subheadingStyle}>Discover the heartbeat of artisans</p>
      <Link to="/shop"><button style={buttonStyle}>Shop Now</button></Link>
    </div>
  );
};

export default KalaaBazaarSection;
