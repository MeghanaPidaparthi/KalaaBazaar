import React, { useState } from 'react';

const BeASeller = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        about: '',
        products: '',
        experience: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here
        alert("Your application has been submitted!");
    };

    const pageStyle = {
        fontFamily: 'Fraunces, serif',
        padding: '40px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const headingStyle = {
        fontSize: '28px',
        color: '#403F2B',
        textAlign: 'center',
        marginBottom: '20px',
    };

    const paragraphStyle = {
        fontSize: '16px',
        color: '#555',
        lineHeight: '1.6',
        marginBottom: '20px',
        textAlign: 'center',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const inputStyle = {
        marginBottom: '15px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ddd',
    };

    const textAreaStyle = {
        ...inputStyle,
        height: '100px',
    };

    const buttonStyle = {
        backgroundColor: '#403F2B',
        color: '#fff',
        padding: '12px',
        fontSize: '16px',
        borderRadius: '4px',
        cursor: 'pointer',
        border: 'none',
    };

    const labelStyle = {
        marginBottom: '5px',
        fontSize: '14px',
        color: '#403F2B',
    };

    return (
        <div style={pageStyle}>
            <h1 style={headingStyle}>Become a Seller on KalaaBazaar</h1>
            <p style={paragraphStyle}>
                Join KalaaBazaar and showcase your unique craft and handmade products to a broad audience. Share your story and products with the world, and grow your artisan business!
            </p>
            <form style={formStyle} onSubmit={handleSubmit}>
                <label style={labelStyle}>Name</label>
                <input
                    style={inputStyle}
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />

                <label style={labelStyle}>Email</label>
                <input
                    style={inputStyle}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />

                <label style={labelStyle}>Phone Number</label>
                <input
                    style={inputStyle}
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                />

                <label style={labelStyle}>Tell us about yourself</label>
                <textarea
                    style={textAreaStyle}
                    name="about"
                    value={formData.about}
                    onChange={handleInputChange}
                    required
                ></textarea>

                <label style={labelStyle}>What products do you create?</label>
                <textarea
                    style={textAreaStyle}
                    name="products"
                    value={formData.products}
                    onChange={handleInputChange}
                    required
                ></textarea>

                <label style={labelStyle}>Your experience in the artisan field</label>
                <textarea
                    style={textAreaStyle}
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                ></textarea>

                <button style={buttonStyle} type="submit">Submit Application</button>
            </form>
        </div>
    );
};

export default BeASeller;
