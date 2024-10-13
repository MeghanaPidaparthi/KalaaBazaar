import React from 'react';

const PrivacyPolicy = () => {
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
            <h1 style={headingStyle}>Privacy Policy</h1>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>1. Introduction</h2>
                <p style={paragraphStyle}>
                    At KalaaBazaar, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal data.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>2. Information We Collect</h2>
                <p style={paragraphStyle}>
                    We collect personal information such as your name, email address, billing details, and shipping address when you make a purchase or create an account.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>3. How We Use Your Information</h2>
                <p style={paragraphStyle}>
                    We use your information to process transactions, improve our services, and send promotional materials if you have opted in.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>4. Sharing of Information</h2>
                <p style={paragraphStyle}>
                    KalaaBazaar does not share your personal information with third parties, except when required to process payments or comply with legal obligations.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>5. Data Security</h2>
                <p style={paragraphStyle}>
                    We implement security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>6. Your Rights</h2>
                <p style={paragraphStyle}>
                    You have the right to access, correct, or delete your personal information at any time. Please contact us if you wish to exercise these rights.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>7. Changes to This Policy</h2>
                <p style={paragraphStyle}>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page, so please review it regularly.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>8. Contact Us</h2>
                <p style={paragraphStyle}>
                    If you have any questions about our Privacy Policy, please contact us at privacy@kalaabazaar.com.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
