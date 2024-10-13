import React from 'react';

const Terms = () => {
    const pageStyle = {
        fontFamily: 'Fraunces, serif',
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const headingStyle = {
        fontSize: '28px',
        marginBottom: '20px',
        color: '#403F2B',
        textAlign: 'center',
    };

    const sectionStyle = {
        marginBottom: '20px',
    };

    const subHeadingStyle = {
        fontSize: '22px',
        marginBottom: '10px',
        color: '#403F2B',
    };

    const paragraphStyle = {
        fontSize: '16px',
        color: '#555',
        lineHeight: '1.6',
    };

    return (
        <div style={pageStyle}>
            <h1 style={headingStyle}>Terms and Conditions</h1>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>1. Introduction</h2>
                <p style={paragraphStyle}>
                    Welcome to KalaaBazaar! These terms and conditions outline the rules and regulations for the use of our platform.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>2. Acceptance of Terms</h2>
                <p style={paragraphStyle}>
                    By accessing this website, you accept these terms and conditions in full. If you disagree with any part of these terms, you must not use our website.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>3. Changes to Terms</h2>
                <p style={paragraphStyle}>
                    We reserve the right to modify these terms at any time. Please review these terms periodically for changes.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>4. User Responsibilities</h2>
                <p style={paragraphStyle}>
                    Users are responsible for ensuring that their account information is accurate and up to date. Users must also ensure the security of their account credentials.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>5. Intellectual Property</h2>
                <p style={paragraphStyle}>
                    All content and materials on this website are the property of KalaaBazaar and are protected by intellectual property laws.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>6. Limitation of Liability</h2>
                <p style={paragraphStyle}>
                    In no event shall KalaaBazaar be liable for any damages arising out of the use of our platform.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>7. Governing Law</h2>
                <p style={paragraphStyle}>
                    These terms shall be governed by and construed in accordance with the laws of India.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>8. Contact Information</h2>
                <p style={paragraphStyle}>
                    For any questions regarding these terms, please contact us at support@kalaabazaar.com.
                </p>
            </div>
        </div>
    );
};

export default Terms;
