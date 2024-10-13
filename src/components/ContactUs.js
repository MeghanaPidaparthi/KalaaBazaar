import React from 'react';
import puppet from "../assets/puppet.png";
const ContactUs = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '50px',
      backgroundColor: '#f2e5d7',
      fontFamily: 'Fraunces',
      color: '#403F2B'
    }}>
      
      {/* Left section with image */}
      <div style={{ flex: 1, textAlign: 'center' }}>
        <img
          src={puppet} // Replace with your actual puppet image URL or import it
          alt="KalaBazaar Puppet"
          style={{ width: '100%', maxWidth: '500px' }}
        />
      </div>
      
      {/* Right section with contact details */}
      <div style={{ flex: 1, padding: '20px' }}>
        <h1 style={{ fontSize: '40px', marginBottom: '20px', textAlign: 'left' }}>KalaaBazaar</h1>
        <p style={{ fontSize: '20px', marginBottom: '40px', color: '#403F2B', textAlign: 'left' }}>
          Your Premier marketplace for Arts, Crafts, and Creativity.
        </p>
        
        <p style={{ fontSize: '18px', color: '#403F2B', textAlign: 'left' }}>
          
        <span role="img" aria-label="phone">
            {/*svg for phone icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_202_47)">
<path d="M18.3332 14.0999V16.5999C18.3341 16.832 18.2866 17.0617 18.1936 17.2744C18.1006 17.487 17.9643 17.6779 17.7933 17.8348C17.6222 17.9917 17.4203 18.1112 17.2005 18.1855C16.9806 18.2599 16.7477 18.2875 16.5165 18.2666C13.9522 17.988 11.489 17.1117 9.32486 15.7083C7.31139 14.4288 5.60431 12.7217 4.32486 10.7083C2.91651 8.53426 2.04007 6.05908 1.76653 3.48325C1.7457 3.25281 1.77309 3.02055 1.84695 2.80127C1.9208 2.58199 2.03951 2.38049 2.1955 2.2096C2.3515 2.03871 2.54137 1.90218 2.75302 1.80869C2.96468 1.7152 3.19348 1.6668 3.42486 1.66658H5.92486C6.32928 1.6626 6.72136 1.80582 7.028 2.06953C7.33464 2.33324 7.53493 2.69946 7.59153 3.09992C7.69705 3.89997 7.89274 4.68552 8.17486 5.44158C8.28698 5.73985 8.31125 6.06401 8.24478 6.37565C8.17832 6.68729 8.02392 6.97334 7.79986 7.19992L6.74153 8.25825C7.92783 10.3445 9.65524 12.072 11.7415 13.2583L12.7999 12.1999C13.0264 11.9759 13.3125 11.8215 13.6241 11.755C13.9358 11.6885 14.2599 11.7128 14.5582 11.8249C15.3143 12.107 16.0998 12.3027 16.8999 12.4083C17.3047 12.4654 17.6744 12.6693 17.9386 12.9812C18.2029 13.2931 18.3433 13.6912 18.3332 14.0999Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_202_47">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
</span> +91 9482654938<br /><br/>


          <span role="img" aria-label="website">
            {/*svg for website */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_202_63)">
<path d="M18.3337 10.0001C18.3337 14.6025 14.6027 18.3334 10.0003 18.3334M18.3337 10.0001C18.3337 5.39771 14.6027 1.66675 10.0003 1.66675M18.3337 10.0001H1.66699M10.0003 18.3334C5.39795 18.3334 1.66699 14.6025 1.66699 10.0001M10.0003 18.3334C12.0847 16.0515 13.2693 13.0901 13.3337 10.0001C13.2693 6.91011 12.0847 3.94871 10.0003 1.66675M10.0003 18.3334C7.91593 16.0515 6.73136 13.0901 6.66699 10.0001C6.73136 6.91011 7.91593 3.94871 10.0003 1.66675M1.66699 10.0001C1.66699 5.39771 5.39795 1.66675 10.0003 1.66675" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_202_63">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg> 
</span> <a href="http://www.kalaabazaar.in" style={{ textDecoration: 'none', color: '#2F4F4F' }}>www.kalaabazaar.in</a><br /><br/>

{/*mail icon */}
          <span role="img" aria-label="email"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33366 16.6666C2.87533 16.6666 2.48296 16.5034 2.15658 16.177C1.83019 15.8506 1.66699 15.4583 1.66699 14.9999V4.99992C1.66699 4.54159 1.83019 4.14922 2.15658 3.82284C2.48296 3.49645 2.87533 3.33325 3.33366 3.33325H16.667C17.1253 3.33325 17.5177 3.49645 17.8441 3.82284C18.1705 4.14922 18.3337 4.54159 18.3337 4.99992V14.9999C18.3337 15.4583 18.1705 15.8506 17.8441 16.177C17.5177 16.5034 17.1253 16.6666 16.667 16.6666H3.33366ZM10.0003 10.8333L3.33366 6.66659V14.9999H16.667V6.66659L10.0003 10.8333ZM10.0003 9.16658L16.667 4.99992H3.33366L10.0003 9.16658ZM3.33366 6.66659V4.99992V14.9999V6.66659Z" fill="#1D1B20"/>
</svg>
</span> info@kalaabazaar@gmail.com<br /><br/>
          <span role="img" aria-label="location"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_202_172)">
<path d="M17.5 8.33325C17.5 14.1666 10 19.1666 10 19.1666C10 19.1666 2.5 14.1666 2.5 8.33325C2.5 6.34413 3.29018 4.43647 4.6967 3.02995C6.10322 1.62343 8.01088 0.833252 10 0.833252C11.9891 0.833252 13.8968 1.62343 15.3033 3.02995C16.7098 4.43647 17.5 6.34413 17.5 8.33325Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10.8333C11.3807 10.8333 12.5 9.71396 12.5 8.33325C12.5 6.95254 11.3807 5.83325 10 5.83325C8.61929 5.83325 7.5 6.95254 7.5 8.33325C7.5 9.71396 8.61929 10.8333 10 10.8333Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_202_172">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
</span> Road no.9, Banjara Hills
        </p>

        {/* Social media icons */}
        <div style={{ marginTop: '40px', textAlign: 'left', display: 'flex', gap: '20px' }}>
          {/* Instagram Icon */}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.3337 8.66675H23.347M9.33366 2.66675H22.667C26.3489 2.66675 29.3337 5.65152 29.3337 9.33342V22.6667C29.3337 26.3486 26.3489 29.3334 22.667 29.3334H9.33366C5.65176 29.3334 2.66699 26.3486 2.66699 22.6667V9.33342C2.66699 5.65152 5.65176 2.66675 9.33366 2.66675ZM21.3337 15.1601C21.4982 16.2697 21.3087 17.403 20.792 18.3988C20.2753 19.3945 19.4579 20.202 18.4558 20.7063C17.4538 21.2107 16.3183 21.3862 15.2107 21.208C14.1032 21.0298 13.08 20.5069 12.2868 19.7136C11.4935 18.9204 10.9706 17.8972 10.7924 16.7897C10.6142 15.6822 10.7897 14.5466 11.2941 13.5446C11.7984 12.5426 12.6059 11.7251 13.6016 11.2084C14.5974 10.6917 15.7307 10.5022 16.8403 10.6667C17.9722 10.8346 19.0201 11.362 19.8293 12.1712C20.6384 12.9803 21.1658 14.0282 21.3337 15.1601Z" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </a>

          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452H16.92v-4.627c0-1.103-.022-2.527-1.54-2.527-1.54 0-1.776 1.206-1.776 2.45v4.704H9.396V9h3.318v1.561h.045c.461-.874 1.588-1.793 3.273-1.793 3.498 0 4.145 2.303 4.145 5.297v6.387zM5.337 7.433c-1.07 0-1.935-.868-1.935-1.936 0-1.069.865-1.937 1.935-1.937s1.935.868 1.935 1.937c0 1.068-.865 1.936-1.935 1.936zm1.774 13.019H3.562V9h3.549v11.452zM22.225 0H1.771C.79 0 0 .774 0 1.731v20.538C0 23.226.79 24 1.771 24h20.451C23.205 24 24 23.226 24 22.269V1.731C24 .774 23.205 0 22.225 0z"/>
            </svg>
          </a>

          {/* facebook icon */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.9997 2.66675H19.9997C18.2316 2.66675 16.5359 3.36913 15.2856 4.61937C14.0354 5.86961 13.333 7.5653 13.333 9.33342V13.3334H9.33301V18.6667H13.333V29.3334H18.6663V18.6667H22.6663L23.9997 13.3334H18.6663V9.33342C18.6663 8.97979 18.8068 8.64065 19.0569 8.39061C19.3069 8.14056 19.6461 8.00008 19.9997 8.00008H23.9997V2.66675Z" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </a>
          {/*twitter icon */}
          <a href="https://www.twitter.com" target='_blank' rel="noopener noreferrer">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_202_135)">
<path d="M30.6663 3.99998C29.3895 4.90062 27.9758 5.58946 26.4797 6.03998C25.6767 5.11666 24.6095 4.46224 23.4224 4.16521C22.2353 3.86819 20.9857 3.94291 19.8424 4.37925C18.6992 4.81559 17.7176 5.59252 17.0303 6.60494C16.343 7.61736 15.9833 8.81643 15.9997 10.04V11.3733C13.6565 11.4341 11.3347 10.9144 9.24102 9.86057C7.14733 8.80675 5.34676 7.25149 3.99967 5.33331C3.99967 5.33331 -1.33366 17.3333 10.6663 22.6666C7.92038 24.5306 4.64922 25.4652 1.33301 25.3333C13.333 32 27.9997 25.3333 27.9997 9.99998C27.9984 9.62858 27.9627 9.25811 27.893 8.89331C29.2538 7.5513 30.2141 5.85693 30.6663 3.99998Z" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_202_135">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

          </a>

{/*youtube icon */}
<a href="" target='_blank' rel="noopener noreferrer">
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_202_151)">
<path d="M30.0538 8.55992C29.8954 7.92713 29.5728 7.34735 29.1186 6.87913C28.6645 6.41091 28.0948 6.07083 27.4671 5.89325C25.1738 5.33325 16.0004 5.33325 16.0004 5.33325C16.0004 5.33325 6.8271 5.33325 4.53377 5.94659C3.9061 6.12416 3.33641 6.46424 2.88223 6.93246C2.42806 7.40068 2.10549 7.98047 1.9471 8.61325C1.52739 10.9407 1.32208 13.3017 1.33377 15.6666C1.31881 18.0493 1.52413 20.4283 1.9471 22.7733C2.12172 23.3864 2.45151 23.9441 2.90463 24.3926C3.35775 24.841 3.91886 25.165 4.53377 25.3333C6.8271 25.9466 16.0004 25.9466 16.0004 25.9466C16.0004 25.9466 25.1738 25.9466 27.4671 25.3333C28.0948 25.1557 28.6645 24.8156 29.1186 24.3474C29.5728 23.8792 29.8954 23.2994 30.0538 22.6666C30.4702 20.3567 30.6755 18.0137 30.6671 15.6666C30.6821 13.2839 30.4767 10.9049 30.0538 8.55992Z" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.0004 20.0266L20.6671 15.6666L13.0004 11.3066V20.0266Z" stroke="#1E1E1E" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_202_151">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
</svg>

</a>

    </div>
      </div>
    </div>
  );
};

export default ContactUs;
