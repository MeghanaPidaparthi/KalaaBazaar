import React from 'react';

const SocialLogin = () => {
  return (
    <div style={styles.container}>
      <p style={styles.loginText}>Or Login with</p>
      <div style={styles.lineLeft}></div>
      <div style={styles.lineRight}></div>

      <div style={styles.socialButtons}>
        <button style={{ ...styles.socialBtn, ...styles.facebook }}>
          <svg width="20" height="20" fill="#3C5A99" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.896 0H1.104C0.495 0 0 0.495 0 1.104v17.792C0 19.505 0.495 20 1.104 20h9.584v-7.745H8.21V9.363h2.478V7.12c0-2.451 1.496-3.785 3.678-3.785 1.046 0 1.944.078 2.205.113v2.558l-1.515.001c-1.188 0-1.417.565-1.417 1.395v1.83h2.834l-.37 2.892h-2.464V20h4.83c.609 0 1.104-.495 1.104-1.104V1.104C20 .495 19.505 0 18.896 0z"/>
          </svg>
        </button>
        <button style={{ ...styles.socialBtn, ...styles.google }}>
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.6 10.227c0-.682-.061-1.345-.176-1.985H10v3.762h5.455c-.234 1.267-.929 2.335-1.972 3.048v2.538h3.182c1.86-1.71 2.935-4.234 2.935-7.362z" fill="#4285F4"/>
            <path d="M10 20c2.7 0 4.961-.898 6.615-2.433l-3.182-2.538c-.884.594-2.011.947-3.433.947-2.64 0-4.875-1.783-5.669-4.177H1.009v2.631C2.656 17.96 6.07 20 10 20z" fill="#34A853"/>
            <path d="M4.331 11.799c-.206-.602-.324-1.244-.324-1.899s.118-1.297.324-1.899V5.37H1.009C.367 6.631 0 8.262 0 9.9s.367 3.269 1.009 4.53l3.322-2.631z" fill="#FBBC05"/>
            <path d="M10 3.98c1.471 0 2.794.505 3.834 1.493l2.864-2.864C14.96.898 12.7 0 10 0 6.07 0 2.656 2.04 1.009 4.53l3.322 2.631C5.125 5.764 7.36 3.98 10 3.98z" fill="#EA4335"/>
          </svg>
        </button>
        <button style={{ ...styles.socialBtn, ...styles.apple }}>
          <svg width="20" height="20" fill="#000000" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.268 9.734c-.024-2.02 1.637-2.99 1.713-3.034-1.027-1.506-2.627-1.71-3.189-1.732-1.34-.135-2.624.79-3.306.79-.682 0-1.738-.77-2.86-.748-1.47.023-2.848.858-3.611 2.179-1.536 2.664-.394 6.611 1.106 8.768.74 1.086 1.621 2.303 2.781 2.26 1.124-.044 1.547-.732 2.91-.732 1.363 0 1.737.732 2.858.71 1.182-.023 1.926-1.09 2.66-2.175.828-1.213 1.169-2.394 1.192-2.455-.026-.012-2.292-.883-2.317-3.507zM13.591 3.678c.577-.704.965-1.683.859-2.656-.832.032-1.83.553-2.429 1.257-.524.605-.983 1.58-.859 2.515.91.071 1.85-.459 2.429-1.116z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '383px',
    height: '161px',
    
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  loginText: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.7)',
    margin: '10px 0',
  },
  lineLeft: {
    position: 'absolute',
    top: '22px',
    left: '20px',
    width: '122px',
    border: '1px solid #D8DADC',
  },
  lineRight: {
    position: 'absolute',
    top: '22px',
    right: '20px',
    width: '122px',
    border: '1px solid #D8DADC',
  },
  socialButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '30px',
  },
  socialBtn: {
    width: '108px',
    height: '56px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #D8DADC',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  facebook: {
    // additional styles for Facebook button
  },
  google: {
    // additional styles for Google button
  },
  apple: {
    // additional styles for Apple button
  },
};

export default SocialLogin;
