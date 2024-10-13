import React from 'react';

const Footer = () => {
  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2rem',
    backgroundColor: '#f5f5dc',
    color: '#403F2B',
    fontFamily: 'Fraunces, serif',
  };

  const leftStyle = {
    maxWidth: '50%',
    color: '#403F2B',
  };

  const rightStyle = {
    display: 'flex',
    gap: '2rem',
  };

  const ulStyle = {
    listStyle: 'none',
    color: '#403F2B',
  };

  const liStyle = {
    marginBottom: '0.5rem',
    color: '#403F2B',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#403F2B',
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  return (
    <footer style={footerStyle}>
      <div style={leftStyle}>
        <h2>Celebrate Creativity, Support Local Artisans</h2>
        <p>© 2024 by KalaaBazaar. All Rights Reserved.</p>
      </div>
      <div style={rightStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}><a href="/" style={linkStyle}>Home</a></li>
          <li style={liStyle}><a href="/about" style={linkStyle}>About</a></li>
          <li style={liStyle}><a href="/shop" style={linkStyle}>Shop</a></li>
          <li style={liStyle}><a href="/mission" style={linkStyle}>Our Mission</a></li>
          <li style={liStyle}><a href="/contact" style={linkStyle}>Contact</a></li>
          <li style={liStyle}><a href="/blogs" style={linkStyle}>Blogs</a></li>
          <li style={liStyle}><a href="/faq" style={linkStyle}>FAQ</a></li>
          <li style={liStyle}><a href="/be-a-seller" style={linkStyle}>Be a Seller</a></li>
          <li style={liStyle}><a href="/guides" style={linkStyle}>Guides</a></li>
        </ul>
        <ul style={ulStyle}>
          <li style={liStyle}><a href="/terms-and-conditions" style={linkStyle}>Terms & Conditions</a></li>
          <li style={liStyle}><a href="/privacy-policy" style={linkStyle}>Privacy Policy</a></li>
          <li style={liStyle}><a href="/shipping-policy" style={linkStyle}>Shipping Policy</a></li>
          <li style={liStyle}><a href="/refund-policy" style={linkStyle}>Refund Policy</a></li>
          <li style={liStyle}><a href="/cookie-policy" style={linkStyle}>Cookie Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
