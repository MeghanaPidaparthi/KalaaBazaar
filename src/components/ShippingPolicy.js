import React from 'react';

const ShippingPolicy = () => {
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
            <h1 style={headingStyle}>Shipping Policy</h1>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>1. Processing Time</h2>
                <p style={paragraphStyle}>
                    All orders are processed within 2-3 business days. Orders are not shipped or delivered on weekends or holidays. If we experience a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>2. Shipping Rates & Delivery Estimates</h2>
                <p style={paragraphStyle}>
                    Shipping charges for your order will be calculated and displayed at checkout. The estimated delivery time depends on the location and shipping method selected at checkout. Standard shipping typically takes 5-7 business days, while express shipping takes 2-3 business days.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>3. Shipment Confirmation & Order Tracking</h2>
                <p style={paragraphStyle}>
                    You will receive a Shipment Confirmation email once your order has shipped, containing your tracking number(s). The tracking number will be active within 24 hours.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>4. Customs, Duties, and Taxes</h2>
                <p style={paragraphStyle}>
                    KalaaBazaar is not responsible for any customs and taxes applied to your order. All fees imposed during or after shipping are the responsibility of the customer (tariffs, taxes, etc.).
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>5. Damages</h2>
                <p style={paragraphStyle}>
                    KalaaBazaar is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim. Please save all packaging materials and damaged goods before filing a claim.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>6. International Shipping</h2>
                <p style={paragraphStyle}>
                    We currently do not ship outside India. However, we are working on expanding our shipping options to cater to international customers in the near future.
                </p>
            </div>

            <div style={sectionStyle}>
                <h2 style={subHeadingStyle}>7. Contact Us</h2>
                <p style={paragraphStyle}>
                    If you have any questions about our Shipping Policy, please contact us at support@kalaabazaar.com.
                </p>
            </div>
        </div>
    );
};

export default ShippingPolicy;
