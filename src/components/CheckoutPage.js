import React, { useState } from 'react';

// Sample Cart Items
const cartItems = [
    {
        id: 1,
        name: 'Floral Tote Bag',
        price: 105.00,
        quantity: 1,
        imgUrl: 'https://example.com/tote1.jpg', // Replace with your image URLs
    },
    {
        id: 2,
        name: 'Handmade Clay Pot',
        price: 289.00,
        quantity: 1,
        imgUrl: 'https://example.com/claypot.jpg', // Replace with your image URLs
    },
];

const CheckoutPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        cardNumber: '',
        cardExpiry: '',
        cardCVC: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement payment and order processing logic here
        alert('Order placed successfully!');
    };

    const getTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', backgroundColor: '#f9f9f9' }}>
            <h1 style={{ textAlign: 'center', color: '#403F2B', fontSize: '2.5em' }}>Checkout</h1>
            
            <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
                <h2 style={{ color: '#403F2B', fontSize: '1.8em' }}>Shipping Information</h2>
                <div style={{ marginBottom: '20px' }}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal Code"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                
                <h2 style={{ color: '#403F2B', fontSize: '1.8em' }}>Payment Information</h2>
                <div style={{ marginBottom: '20px' }}>
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '10px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="text"
                        name="cardExpiry"
                        placeholder="Expiry Date (MM/YY)"
                        value={formData.cardExpiry}
                        onChange={handleChange}
                        required
                        style={{ width: '49%', padding: '10px', margin: '5px 0', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                    <input
                        type="text"
                        name="cardCVC"
                        placeholder="CVC"
                        value={formData.cardCVC}
                        onChange={handleChange}
                        required
                        style={{ width: '49%', padding: '10px', margin: '5px 0 5px 5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                
                <h2 style={{ color: '#403F2B', fontSize: '1.8em' }}>Order Summary</h2>
                <div style={{ marginBottom: '20px', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
                    {cartItems.map(item => (
                        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <span>{item.name} (x{item.quantity})</span>
                            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                        <span>Total:</span>
                        <span>₹{getTotal()}</span>
                    </div>
                </div>
                
                <button type="submit" style={{ background: '#403F2B', color: '#fff', padding: '15px 30px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1.2em' }}>
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default CheckoutPage;
