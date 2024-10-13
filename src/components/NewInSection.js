import React, { useState } from 'react';
import Knitting from '../assets/Knitting.png'; // Replace with correct image path
import Vases from '../assets/Vases.png'; // Replace with correct image path
import IncenseBurner from '../assets/IncenseBurner.png'; // Replace with correct image path
import Paintings from '../assets/Paintings.png'; // Replace with correct image path
import EcoBags from '../assets/EcoBags.png'; // Replace with correct image path

const NewInSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      image: Knitting,
      name: 'DIY Knitting Kits',
      price: '₹99',
    },
    {
      image: Vases,
      name: 'Handmade vases',
      price: '₹599',
    },
    {
      image: IncenseBurner,
      name: 'Incense burners',
      price: '₹799',
    },
    {
      image: Paintings,
      name: 'Paintings',
      price: '₹250',
    },
    {
      image: EcoBags,
      name: 'Hand-painted eco bags',
      price: '₹250',
    },
  ];

  const goPrev = () => {
    setCurrentIndex(currentIndex === 0 ? products.length - 1 : currentIndex - 1);
  };

  const goNext = () => {
    setCurrentIndex(currentIndex === products.length - 1 ? 0 : currentIndex + 1);
  };

  const carouselStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const arrowStyle = {
    cursor: 'pointer',
    fontSize: '2rem',
    color: '#6d6d6d',
    userSelect: 'none',
  };

  const productStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.3s ease',
    width: '150px',
    height: '220px',
  };

  const imageStyle = {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '10px',
    transition: 'transform 0.3s ease',
  };

  const productHoverStyle = {
    transform: 'scale(1.05)',
  };

  const textColorStyle = {
    color: '#403F2B', // Text color
    fontFamily: "'Georgia', serif",
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2 style={{ ...textColorStyle, fontWeight: 'bold' }}>New In</h2>
      <div style={carouselStyle}>
        {/* Back Arrow */}
        <span onClick={goPrev} style={arrowStyle}>
          &#10094; {/* Left Arrow Icon */}
        </span>

        {/* Product Cards */}
        <div style={{ display: 'flex', gap: '20px' }}>
          {products.slice(currentIndex, currentIndex + 3).map((product, index) => (
            <div
              key={index}
              style={productStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img src={product.image} alt={product.name} style={imageStyle} />
              <p style={textColorStyle}>{product.name}</p>
              <p style={textColorStyle}>starting from {product.price}</p>
            </div>
          ))}
        </div>

        {/* Next Arrow */}
        <span onClick={goNext} style={arrowStyle}>
          &#10095; {/* Right Arrow Icon */}
        </span>
      </div>
    </div>
  );
};

export default NewInSection;
