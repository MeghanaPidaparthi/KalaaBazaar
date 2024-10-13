import React, { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Toggle between Login and Signup
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '' });
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic
      console.log('Logging in...', formData);
    } else {
      // Handle signup logic
      console.log('Signing up...', formData);
    }
  };

  // Social login handlers
  const handleGoogleLogin = () => {
    console.log('Google login...');
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login...');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#FFFDC3', // KalaBazaar background color
    }}>
      <form onSubmit={handleSubmit} style={{
        width: '350px',
        padding: '30px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Fraunces',
      }}>
        {/* Form Title */}
        <h2 style={{
          textAlign: 'center',
          color: '#403F2B', // KalaBazaar primary color
          marginBottom: '20px',
        }}>
          {isLogin ? 'Login to KalaaBazaar' : 'Create Your KalaBazaar Account'}
        </h2>

        {/* Name Field (Only for Signup) */}
        {!isLogin && (
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="name" style={{ color: '#403F2B', marginBottom: '5px', display: 'block' }}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #dcdcdc',
                borderRadius: '5px',
                fontSize: '16px',
                color: '#403F2B',
              }}
            />
          </div>
        )}

        {/* Email Field */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{ color: '#403F2B', marginBottom: '5px', display: 'block' }}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #dcdcdc',
              borderRadius: '5px',
              fontSize: '16px',
              color: '#403F2B',
            }}
          />
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password" style={{ color: '#403F2B', marginBottom: '5px', display: 'block' }}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #dcdcdc',
              borderRadius: '5px',
              fontSize: '16px',
              color: '#403F2B',
            }}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#403F2B', // KalaBazaar primary button color
          color: '#FFFDC3',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
        }}>
          {isLogin ? 'Login' : 'Sign Up'}
        </button>

        {/* Social Login Options */}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <p style={{ color: '#403F2B' }}>Or login with</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            {/* Google Login Button */}
            <button type="button" onClick={handleGoogleLogin} style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 20px',
              backgroundColor: '#DB4437', // Google button color
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}>
              {/* Google SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                <path d="M22.54 10H12v4.5h5.86c-.67 2.14-2.63 3.7-5.36 3.7a6.16 6.16 0 1 1 0-12.3c1.63 0 3.1.63 4.23 1.67l3.16-3.16A10.92 10.92 0 0 0 12 0a11 11 0 1 0 0 22c5.55 0 10.1-4 10.1-10a8.88 8.88 0 0 0-.23-2z"/>
              </svg>
              Google
            </button>

            {/* Facebook Login Button */}
            <button type="button" onClick={handleFacebookLogin} style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 20px',
              backgroundColor: '#4267B2', // Facebook button color
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}>
              {/* Facebook SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                <path d="M18 2h-3c-1.1 0-2 .9-2 2v3H9v4h4v10h4V11h3l1-4h-4V4c0-.6.4-1 1-1h3z"/>
              </svg>
              Facebook
            </button>
          </div>
        </div>

        {/* Toggle Between Login/Signup */}
        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#403F2B' }}>
          {isLogin ? 'New to KalaaBazaar?' : 'Already have an account?'}
          <span onClick={toggleAuthMode} style={{
            color: '#FF6F61', // Accent Color
            cursor: 'pointer',
            marginLeft: '5px',
          }}>
            {isLogin ? 'Sign up here' : 'Login here'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
