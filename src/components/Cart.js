import React, { useState, useEffect } from 'react';

// Delete icon SVG
const DeleteIcon = () => (
    <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="22" height="23" fill="white" />
        <path d="M18 6H5V21H18V6Z" stroke="#403F2B" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 3H6V6H17V3Z" stroke="#403F2B" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 6L20 6" stroke="#403F2B" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 9V20" stroke="#403F2B" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 9V20" stroke="#403F2B" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const CartPage = () => {
    const [cartItems, setCartItems] = useState(() => {
        // Load from localStorage if available
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [
            {
                id: 1,
                name: 'Floral Tote Bag',
                price: '₹105.00',
                quantity: 1,
                imgUrl: 'https://example.com/tote1.jpg', // Replace with your image URLs
            },
            {
                id: 2,
                name: 'Handmade Clay Pot',
                price: '₹289.00',
                quantity: 1,
                imgUrl: 'https://example.com/claypot.jpg', // Replace with your image URLs
            },
            {
                id: 3,
                name: 'Eco-Friendly Notebook',
                price: '₹88.00',
                quantity: 1,
                imgUrl: 'https://example.com/notebook.jpg', // Replace with your image URLs
            },
        ];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleQuantityChange = (id, newQuantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalPrice = cartItems.reduce((total, item) => total + (parseFloat(item.price.replace('₹', '')) * item.quantity), 0);

    const formatPrice = (price) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);

    return (
        <div style={{ padding: '40px', maxWidth: '100%', margin: '0 auto', backgroundColor: '#f9f9f9' }}>
            <h1 style={{ textAlign: 'center', color: '#403F2B', fontSize: '2.5em' }}>My Cart</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '15px', borderBottom: '2px solid #E3E3E3', fontSize: '1.2em' }}>Product</th>
                        <th style={{ textAlign: 'left', padding: '15px', borderBottom: '2px solid #E3E3E3', fontSize: '1.2em' }}>Unit Price</th>
                        <th style={{ textAlign: 'left', padding: '15px', borderBottom: '2px solid #E3E3E3', fontSize: '1.2em' }}>Quantity</th>
                        <th style={{ textAlign: 'left', padding: '15px', borderBottom: '2px solid #E3E3E3', fontSize: '1.2em' }}>Total</th>
                        <th style={{ textAlign: 'left', padding: '15px', borderBottom: '2px solid #E3E3E3', fontSize: '1.2em' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id} style={{ borderBottom: '1px solid #E3E3E3' }}>
                            <td style={{ padding: '15px', display: 'flex', alignItems: 'center' }}>
                                <img src={item.imgUrl} alt={item.name} style={{ width: '80px', height: '80px', marginRight: '15px' }} />
                                {item.name}
                                <button 
                                    style={{ marginLeft: '15px', border: 'none', background: 'transparent', cursor: 'pointer' }} 
                                    onClick={() => handleRemoveItem(item.id)}
                                    aria-label={`Remove ${item.name}`}
                                >
                                    <DeleteIcon />
                                </button>
                            </td>
                            <td style={{ padding: '15px', fontSize: '1.2em' }}>{formatPrice(item.price.replace('₹', ''))}</td>
                            <td style={{ padding: '15px' }}>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    min="1"
                                    style={{ width: '60px', textAlign: 'center', padding: '5px' }}
                                    onChange={(e) => handleQuantityChange(item.id, Math.max(1, parseInt(e.target.value)))}
                                    aria-label={`Change quantity for ${item.name}`}
                                />
                            </td>
                            <td style={{ padding: '15px', fontSize: '1.2em' }}>{formatPrice((parseFloat(item.price.replace('₹', '')) * item.quantity).toFixed(2))}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ marginTop: '20px', textAlign: 'right', fontSize: '1.5em', color: '#403F2B' }}>
                <strong>Total: {formatPrice(totalPrice)}</strong>
            </div>
            <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <button 
                    style={{ background: '#403F2B', color: '#fff', padding: '15px 30px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1.5em' }}
                    aria-label="Proceed to Checkout"
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
};

export default CartPage;
