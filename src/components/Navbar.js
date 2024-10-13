import React from 'react';

// Assuming this is passed as a prop from a parent component
const Navbar = ({ cartCount }) => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 4rem',
    backgroundColor: '#fff',
    fontFamily: 'Fraunces, serif',
  };

  const linkContainerStyle = {
    display: 'flex',
    gap: '2rem',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#000',
    fontSize: '1rem',
  };

  const centerTextStyle = {
    fontFamily: 'Fraunces, serif',
    fontSize: '2.5rem',
    color: '#000',
    margin: '0 6rem',
  };

  const rightLinkContainerStyle = {
    display: 'flex',
    gap: '3rem',
    alignItems: 'center',
  };

  const iconsStyle = {
    display: 'flex',
    gap: '1.5rem',
    position: 'relative',
  };

  const cartCountStyle = {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '50%',
    padding: '0.2rem 0.5rem',
  };

  return (
    <nav style={navbarStyle}>
      <div style={linkContainerStyle}>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/about" style={linkStyle}>About</a>
        <a href="/contact" style={linkStyle}>Contact</a>
      </div>
      <div>
        <h1 style={centerTextStyle}>KalaaBazaar</h1>
      </div>
      <div style={rightLinkContainerStyle}>
        <a href="/shop" style={linkStyle}>Shop</a>
        <a href="/login" style={linkStyle}>Login/Signup</a>
        <a href="/kalamitra" style={linkStyle}>Kalamitra</a>
        <div style={iconsStyle}>
          <a href='/wishlist'>
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.5867 1.83918C19.4623 1.17018 18.1303 0.888134 16.8133 1.04021C15.4963 1.19229 14.2742 1.76927 13.3512 2.6747L12.0031 3.9355H11.9715L10.6392 2.6747C9.71618 1.76927 8.49404 1.19229 7.17705 1.04021C5.86005 0.888134 4.52801 1.17018 3.40361 1.83918C2.7465 2.24347 2.19255 2.78187 1.78204 3.4152C1.37154 4.04853 1.11481 4.76085 1.03058 5.50032C0.946337 6.23978 1.03669 6.98778 1.29507 7.68989C1.55344 8.39199 1.97334 9.03054 2.52419 9.55905L11.9346 19L12.1242 18.8199L12.1821 18.8749L21.482 9.55905C22.0321 9.02952 22.4509 8.39009 22.708 7.68734C22.9652 6.98458 23.0541 6.2362 22.9683 5.49667C22.8826 4.75714 22.6243 4.04511 22.2123 3.41239C21.8003 2.77968 21.245 2.24223 20.5867 1.83918V1.83918Z" stroke="#3A4651" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="/cart">
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.8338 22H2.98386C2.70994 22.0015 2.44511 21.9071 2.2405 21.7349C2.03588 21.5628 1.90597 21.325 1.87585 21.0676L1.00053 8.64809C0.995917 8.50934 1.02141 8.37116 1.07546 8.24208C1.12951 8.11301 1.21096 7.99576 1.31478 7.8976C1.4186 7.79943 1.5426 7.72243 1.67912 7.67132C1.81564 7.62022 1.96178 7.59612 2.10854 7.60048H21.892C22.1859 7.60048 22.4677 7.71085 22.6755 7.90732C22.8833 8.10378 23 8.37025 23 8.64809L21.9419 21.0781C21.9092 21.3336 21.7782 21.5688 21.5738 21.7388C21.3695 21.9089 21.1061 22.0018 20.8338 22V22Z" stroke="#3A4651" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.45752 11V5.23809C6.45752 3.84886 7.04121 2.51653 8.08017 1.5342C9.11913 0.551864 10.5282 0 11.9976 0C13.4669 0 14.876 0.551864 15.915 1.5342C16.9539 2.51653 17.5376 3.84886 17.5376 5.23809V11" stroke="#3A4651" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          {cartCount > 0 && (
            <span style={cartCountStyle}>{cartCount}</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
