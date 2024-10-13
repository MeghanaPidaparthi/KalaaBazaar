import React from 'react';
import Peacock from "../assets/Peacock.png";
const KalaBazaarMission = () => {
  const missionSectionStyle = {
    backgroundColor: '#4A4A32',
    padding: '40px 20px',
    textAlign: 'center',
    color: '#EEE7C8',
    fontFamily: "'Fraunces', serif"
  };

  const missionIconsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
    color: '#EEE7C8',
  };

  const iconTextStyle = {
    fontSize: '16px',
    marginTop: '10px',
  };

  const kalaabazaarStyle={
    fontSize: '4rem', // Larger font size for "KalaaBazaar"
    fontWeight: 700,
    
  }
  const missionItems = [
    { 
        icon: <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M75.8621 23.4849H46.5518V50.7576H75.8621V23.4849Z" stroke="#FFFDC3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M56.0344 50.7576H66.3793V79.5454C66.3793 80.751 65.8343 81.9072 64.8643 82.7596C63.8943 83.612 62.5786 84.0909 61.2068 84.0909C59.835 84.0909 58.5194 83.612 57.5494 82.7596C56.5793 81.9072 56.0344 80.751 56.0344 79.5454V50.7576Z" stroke="#FFFDC3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M46.5518 40.1515H75.8621" stroke="#FFFDC3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M26.3795 55.6818C29.1231 55.6818 31.7544 56.6396 33.6945 58.3445C35.6345 60.0493 36.7243 62.3616 36.7243 64.7727L36.3795 67.803C35.5155 75.215 32.1537 82.2317 26.7243 87.9545C21.2943 82.238 17.9533 75.2148 17.1381 67.803L16.7244 64.2272C16.7153 63.1079 16.9583 61.998 17.4394 60.9616C17.9206 59.9251 18.6303 58.9826 19.5278 58.1883C20.4252 57.394 21.4927 56.7635 22.6687 56.3334C23.8446 55.9032 25.1057 55.6817 26.3795 55.6818V55.6818Z" stroke="#FFFDC3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M31.7241 55.6818H21.724L21.724 27.8788C21.724 26.7134 22.2509 25.5957 23.1886 24.7717C24.1262 23.9477 25.398 23.4848 26.7241 23.4848V23.4848C28.0502 23.4848 29.3219 23.9477 30.2596 24.7717C31.1973 25.5957 31.7241 26.7134 31.7241 27.8788L31.7241 55.6818Z" stroke="#FFFDC3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        , text: 'Handmade' },
    { icon: <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M52.1739 48.0391C56.1759 48.0391 59.4202 45.0544 59.4202 41.3725C59.4202 37.6906 56.1759 34.7058 52.1739 34.7058C48.1718 34.7058 44.9275 37.6906 44.9275 41.3725C44.9275 45.0544 48.1718 48.0391 52.1739 48.0391Z" stroke="#FFFDC3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M73.913 41.3725C73.9196 38.2682 73.1407 35.2052 71.6379 32.4258C70.1351 29.6465 67.9498 27.2271 65.2548 25.3592C62.5598 23.4913 59.4292 22.2262 56.1108 21.6641C52.7925 21.1019 49.3774 21.2581 46.136 22.1203C42.8946 22.9825 39.9158 24.527 37.4355 26.6316C34.9551 28.7361 33.0414 31.343 31.8456 34.2458C30.6499 37.1486 30.205 40.2676 30.5463 43.3559C30.8875 46.4443 32.0054 49.4171 33.8116 52.0392L36.5942 56.0392L52.1739 77.3725L67.7536 56.0392L70.5362 52.0392C72.7415 48.8514 73.9129 45.1511 73.913 41.3725V41.3725Z" stroke="#FFFDC3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
, text: 'Locally sourced' },
    { icon: <img src={Peacock} alt="Peacock-culturally inspired logo"/>, text: 'Culturally inspired' },
    { icon: <svg width="87" height="82" viewBox="0 0 87 82" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M84 41L76.6939 53.9057L72.1463 67.8781L57.2547 72.1451L43.5 79L29.7453 72.1451L14.8537 67.8781L10.306 53.9057L3 41L10.306 28.0943L14.8537 14.1219L29.7453 9.85491L43.5 3L57.2547 9.85491L72.1463 14.1219L76.6939 28.0943L84 41Z" stroke="#FFFDC3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M33 41L41.3586 49L56 35" stroke="#FFFDC3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        , text: 'Quality Over Quantity' },
    { icon: <svg width="65" height="72" viewBox="0 0 65 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M62 3H3V69H62V3Z" stroke="#FFFDC3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M23 21C23.0091 23.9141 24.013 26.706 25.7926 28.7666C27.5722 30.8272 29.9832 31.9895 32.5 32V32C35.0168 31.9895 37.4278 30.8272 39.2074 28.7666C40.987 26.706 41.9909 23.9141 42 21" stroke="#FFFDC3" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        , text: 'Sustainable packaging' },
  ];

  return (
    <section style={missionSectionStyle}>
      <h2>The <span style={kalaabazaarStyle}>KalaaBazaar</span> Mission</h2>
      <p>
        We believe in promoting creativity, sustainability, and community.
        All of our products are thoughtfully curated to support local artisans
        and eco-friendly practices.
      </p>
      <div style={missionIconsStyle}>
        {missionItems.map((item, index) => (
          <div key={index}>
            <div>{item.icon}</div>
            <div style={iconTextStyle}>{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KalaBazaarMission;
