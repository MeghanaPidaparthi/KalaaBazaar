import React from 'react';
import Gifts from "../assets/Gifts.png";
import HomeDecor from '../assets/HomeDecor.png';
import WallDecor from "../assets/WallDecor.png";
import ArtisanJewelry from "../assets/ArtisanJewelry.png";
import Minimalist from "../assets/Minimalist.png";
import { Link } from 'react-router-dom';

const ShopCollections = () => {
  const sectionStyle = {
    backgroundColor: '#FFFDC3',
    padding: '2rem',
    fontFamily: 'Fraunces',
    color: '#403F2B',
    textAlign: 'center',
  };

  const collectionWrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  };

  const collectionCardStyle = {
    position: 'relative',
    borderRadius: '15px',
    margin: '1rem',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    width: '300px',
    height: '300px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out',
  };

  const collectionTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    fontFamily: 'Fraunces',
    fontSize: '1.8rem',
    color: '#FFFDC3',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(50%)', // Darkens the image
  };

  const handleHoverEffect = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <section style={sectionStyle}>
      <h2>Shop Collections</h2>
      <div style={collectionWrapperStyle}>
        {/* Left side: Gifts & Occasions, Home Decor */}
        <Link to="/gifts-occasions" style={{ textDecoration: 'none' }}>
          <div
            style={collectionCardStyle}
            onMouseEnter={handleHoverEffect}
            onMouseLeave={handleMouseLeave}
          >
            <span style={collectionTextStyle}>Gifts & Occasions</span>
            <img src={Gifts} alt="Gifts & Occasions" style={imageStyle} />
          </div>
        </Link>

        <Link to="/home-decor" style={{ textDecoration: 'none' }}>
          <div
            style={collectionCardStyle}
            onMouseEnter={handleHoverEffect}
            onMouseLeave={handleMouseLeave}
          >
            <span style={collectionTextStyle}>Home Decor</span>
            <img src={HomeDecor} alt="Home Decor" style={imageStyle} />
          </div>
        </Link>

        {/* Centered: Wall Decor */}
        <Link to="/wall-decor" style={{ textDecoration: 'none' }}>
          <div
            style={{ ...collectionCardStyle, width: '340px', height: '340px' }}
            onMouseEnter={handleHoverEffect}
            onMouseLeave={handleMouseLeave}
          >
            <span style={collectionTextStyle}>Wall Decor</span>
            <img src={WallDecor} alt="Wall Decor" style={imageStyle} />
          </div>
        </Link>

        {/* Right side: Artisan Jewelry, The Minimalist */}
        <Link to="/artisan-jewelry" style={{ textDecoration: 'none' }}>
          <div
            style={collectionCardStyle}
            onMouseEnter={handleHoverEffect}
            onMouseLeave={handleMouseLeave}
          >
            <span style={collectionTextStyle}>Artisan Jewelry</span>
            <img src={ArtisanJewelry} alt="Artisan Jewelry" style={imageStyle} />
          </div>
        </Link>

        <Link to="/minimalist" style={{ textDecoration: 'none' }}>
          <div
            style={collectionCardStyle}
            onMouseEnter={handleHoverEffect}
            onMouseLeave={handleMouseLeave}
          >
            <span style={collectionTextStyle}>The Minimalist</span>
            <img src={Minimalist} alt="The Minimalist" style={imageStyle} />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ShopCollections;
