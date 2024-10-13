import React from 'react';

const CookiePolicy = () => {
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
            <h1 style={headingStyle}>Cookie Policy</h1>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>1. What Are Cookies?</h2>
                <p style={paragraphStyle}>
                    Cookies are small files that are placed on your computer or device when you visit our website. Cookies allow the site to recognize your device and store some information about your preferences or past actions.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>2. How We Use Cookies</h2>
                <p style={paragraphStyle}>
                    We use cookies to enhance your experience on KalaaBazaar. Cookies help us to understand how you use our website, track which pages you visit, and remember your preferences for future visits. They also allow us to show personalized content and advertisements.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>3. Types of Cookies We Use</h2>
                <p style={paragraphStyle}>
                    <strong>Essential Cookies:</strong> These cookies are necessary for the basic functionalities of our website, such as remembering your session and preferences.<br/>
                    <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website, enabling us to improve your experience.<br/>
                    <strong>Advertising Cookies:</strong> We use these cookies to deliver personalized ads based on your browsing behavior.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>4. Managing Cookies</h2>
                <p style={paragraphStyle}>
                    You can choose to accept or decline cookies through your browser settings. Please note that disabling cookies may affect your experience on KalaaBazaar and limit the functionality of some features.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>5. Third-Party Cookies</h2>
                <p style={paragraphStyle}>
                    Some cookies may be set by third-party services that appear on our pages. We do not control these cookies, and you should refer to the third-party service's cookie policy for more information.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>6. Updates to Our Cookie Policy</h2>
                <p style={paragraphStyle}>
                    We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>7. Contact Us</h2>
                <p style={paragraphStyle}>
                    If you have any questions about this Cookie Policy, please contact us at support@kalaabazaar.com.
                </p>
            </div>
        </div>
    );
};

export default CookiePolicy;
