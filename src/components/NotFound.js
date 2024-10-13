import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Fraunces',
      textAlign: 'center',
      backgroundColor: '#F8F4E3'
    }}>
      <h1 style={{ fontSize: '80px', marginBottom: '20px', color: '#2F3C2D' }}>404</h1>
      <h2 style={{ fontSize: '30px', color: '#3E4C34' }}>Oops! Page not found.</h2>
      <p style={{ fontSize: '18px', color: '#6C6F6E', marginBottom: '40px' }}>
        The page you are looking for doesn't exist or was removed.
      </p>
      <Link to="/" style={{
        fontSize: '18px',
        color: '#FF686B',
        textDecoration: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        backgroundColor: '#403F2B',
        color: 'white'
      }}>Go to Home</Link>
    </div>
  );
}

export default NotFound;
