import React from 'react';

const RefundPolicy = () => {
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
            <h1 style={headingStyle}>Refund Policy</h1>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>1. Overview</h2>
                <p style={paragraphStyle}>
                    At KalaaBazaar, we strive to ensure that our customers are satisfied with their purchases. If you are not entirely satisfied, we’re here to help.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>2. Returns</h2>
                <p style={paragraphStyle}>
                    You have 30 days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging, and a receipt or proof of purchase is required.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>3. Refunds</h2>
                <p style={paragraphStyle}>
                    Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you of the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your original method of payment within 7 business days.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>4. Late or Missing Refunds</h2>
                <p style={paragraphStyle}>
                    If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, as it may take some time before your refund is officially posted. If you’ve done all of this and still have not received your refund, please contact us at support@kalaabazaar.com.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>5. Shipping</h2>
                <p style={paragraphStyle}>
                    You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>6. Contact Us</h2>
                <p style={paragraphStyle}>
                    If you have any questions on how to return your item to us, please contact us at support@kalaabazaar.com.
                </p>
            </div>
        </div>
    );
};

export default RefundPolicy;
