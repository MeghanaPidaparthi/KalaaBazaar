import React from 'react';
import { Link } from 'react-router-dom';

const SellerProfile = () => {
    const profileStyle = {
        fontFamily: 'Fraunces, serif',
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
    };

    const sectionStyle = {
        marginBottom: '20px',
    };

    const headingStyle = {
        fontSize: '24px',
        marginBottom: '10px',
        color: '#403F2B',
    };

    const paragraphStyle = {
        fontSize: '16px',
        color: '#555',
    };

    const imageStyle = {
        width: '100%',
        borderRadius: '8px',
    };

    const circularImageStyle = {
        width: '150px',
        height: '150px',
        borderRadius: '50%', // Makes the image circular
        objectFit: 'cover', // Ensures the image covers the entire circular area
        border: '2px solid #403F2B', // Optional: adds a border around the profile picture
    };

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const flexItem = {
        flex: '1',
        margin: '10px',
        maxWidth: '48%', // Keeps two images side by side with some spacing
    };

    return (
        <div style={profileStyle}>
            <h2 style={headingStyle}>Seller Profile: Anika Mehta</h2>
            <div style={flexContainer}>
                <img src="https://i.pinimg.com/474x/3f/b0/48/3fb048d655f608109374b3e5498ad50b.jpg" alt="Profile" style={circularImageStyle} />
                <div style={{ flex: '1', marginLeft: '20px' }}>
                    <h3 style={headingStyle}>About Me</h3>
                    <p style={paragraphStyle}>
                        I am Anika Mehta, a passionate artisan specializing in handcrafted pottery.
                    </p>
                </div>
            </div>
            <div style={sectionStyle}>
                <h3 style={headingStyle}>My Works</h3>
                <div style={flexContainer}>
                    <div style={flexItem}>
                        <img src="https://i.pinimg.com/enabled_hi/236x/af/10/da/af10dacf7b95d99e6fc6aa6f9af0bd1f.jpg" alt="Work 1" style={imageStyle} />
                    </div>
                    <div style={flexItem}>
                        <img src="https://i.pinimg.com/enabled_hi/236x/81/de/1e/81de1ef655a6df987f4a5092d144e728.jpg" alt="Work 2" style={imageStyle} />
                    </div>
                    <div style={flexItem}>
                        <img src="https://i.pinimg.com/enabled_hi/236x/23/33/5b/23335b33f457ee9cd19d31e4f1b4516d.jpg" alt="Work 3" style={imageStyle} />
                    </div>
                    <div style={flexItem}>
                        <img src="https://i.pinimg.com/enabled_hi/236x/dc/e4/e8/dce4e88f52b286c82f9ade4a71915810.jpg" alt="Work 4" style={imageStyle} />
                    </div>
                </div>
            </div>
            <div style={sectionStyle}>
                <h3 style={headingStyle}>Testimonials</h3>
                <p style={paragraphStyle}>
                    "Anika's pottery adds beauty to my home!" - Riya Singh
                </p>
            </div>
            <div style={sectionStyle}>
                <h3 style={headingStyle}>My Story</h3>
                <p style={paragraphStyle}>
                    I started my journey in pottery at a young age and have since developed my skills to create unique pieces.My journey began in my grandmother's workshop where I learned about pottery and eventually my passion grew :)
                </p>
            </div>
            <div style={sectionStyle}>
                <h3 style={headingStyle}>Tutorials</h3>
                <p style={paragraphStyle}>
                    Check out my <Link to="/tutorials" style={{ color: '#5A9A4D' }}>blog/video tutorials</Link> for tips and tricks!
                </p>
            </div>
        </div>
    );
};

export default SellerProfile;
