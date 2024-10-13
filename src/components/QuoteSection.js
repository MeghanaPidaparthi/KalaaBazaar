import React from 'react';
import Quote from "../assets/Quote.png"
import { Link } from 'react-router-dom';
const QuoteSection = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h2 style={styles.quote}>
          “Every product tells a story, not just of its craft, but of the hands that shaped it”
        </h2>
        <Link to="/shop"><button style={styles.button}>Shop now</button></Link>
      </div>
      <div style={styles.imageContainer}>
        <img src={Quote} alt="Craft Image" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px',
    backgroundColor: '#FEFAF0',
    width: '100%',
  },
  textContainer: {
    maxWidth: '50%',
  },
  quote: {
    fontFamily: 'Fraunces, serif',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '48px',
    lineHeight: '60px',
    color: '#403F2B',
    marginBottom: '20px',
  },
  button: {
    padding: '15px 30px',
    backgroundColor: '#403F2B',
    color: '#FEFAF0',
    border: 'none',
    borderRadius: '25px',
    fontSize: '16px',
    cursor: 'pointer',
    fontFamily: 'Fraunces, serif',
  },
  imageContainer: {
    maxWidth: '40%',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
  },
};

export default QuoteSection;
