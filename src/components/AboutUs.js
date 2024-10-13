import React from 'react';

const AboutUs = () => {
  return (
    <div style={{
      fontFamily: 'Fraunces',
      color: '#2F4F4F',
      backgroundColor: '#f2e5d7',
      padding: '50px',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {/* Heading */}
        <h1 style={{ fontSize: '40px', marginBottom: '20px' }}>About KalaBazaar</h1>

        {/* Intro Text */}
        <p style={{ fontSize: '18px', color: '#696969', marginBottom: '40px' }}>
          Welcome to KalaBazaar, your vibrant marketplace for handmade arts and crafts.
          We believe in supporting local artisans and preserving our cultural heritage by offering a platform where
          creativity meets opportunity.
        </p>

        {/* Our Mission Section */}
        <div style={{ marginBottom: '60px', width: '100%' }}>
          <h2 style={{ fontSize: '30px', marginBottom: '20px' }}>Our Mission</h2>
          <p style={{ fontSize: '18px', color: '#696969', lineHeight: '1.6' }}>
            At KalaBazaar, our mission is to create an ecosystem where artisans can showcase their unique skills and
            creativity. We strive to promote fair trade, ensure sustainable production, and foster a community that
            celebrates art in its many forms. Our goal is to make art accessible while empowering the creators behind
            every handmade product.
          </p>
        </div>

        {/* Vision and Values Section */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '30px',
          flexWrap: 'wrap',
          marginBottom: '60px',
        }}>
          <div style={{
            flex: 1,
            minWidth: '300px',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'left'
          }}>
            <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Our Vision</h3>
            <p style={{ fontSize: '16px', color: '#696969', lineHeight: '1.6' }}>
              We envision a world where traditional craftsmanship thrives, artisans are celebrated, and every product
              tells a story. Through our platform, we aim to connect consumers with creators, offering unique,
              handmade products that promote sustainability and cultural diversity.
            </p>
          </div>

          <div style={{
            flex: 1,
            minWidth: '300px',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'left'
          }}>
            <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>Our Values</h3>
            <ul style={{ fontSize: '16px', color: '#696969', lineHeight: '1.6', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>Sustainability and Eco-Friendliness</li>
              <li style={{ marginBottom: '10px' }}>Supporting Local Artisans</li>
              <li style={{ marginBottom: '10px' }}>Celebrating Diversity in Craft</li>
              <li style={{ marginBottom: '10px' }}>Empowering Creative Expression</li>
              <li style={{ marginBottom: '10px' }}>Promoting Fair Trade Practices</li>
            </ul>
          </div>
        </div>

        {/* The KalaBazaar Story */}
        <div style={{ marginBottom: '60px', width: '100%' }}>
          <h2 style={{ fontSize: '30px', marginBottom: '20px' }}>Our Story</h2>
          <p style={{ fontSize: '18px', color: '#696969', lineHeight: '1.6' }}>
            KalaBazaar began with a simple vision – to provide a platform for the unsung heroes of the art and craft
            world. Our journey started in 2024, when Meghana Pidaparthi, our founder and CEO, noticed the struggles faced by
            local artisans in bringing their creations to a global audience. What started as a passion project has now
            grown into a full-fledged marketplace, bridging the gap between creators and consumers, fostering creativity,
            and making the world of handmade goods more accessible to all.
          </p>
        </div>

        {/* CTA to Shop */}
        <div style={{ marginBottom: '40px' }}>
          <a
            href="/shop"
            style={{
              backgroundColor: '#2F4F4F',
              color: '#fff',
              padding: '12px 25px',
              borderRadius: '5px',
              textDecoration: 'none',
              fontSize: '18px'
            }}
          >
            Explore Our Collection
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
