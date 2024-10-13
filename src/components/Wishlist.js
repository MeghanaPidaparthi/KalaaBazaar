import React from 'react';

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

const WishlistPage = () => {
    const items = [
        {
            id: 1,
            name: 'Floral Tote Bag',
            price: '₹105.00',
            stockStatus: 'In Stock',
            imgUrl: 'https://i.pinimg.com/564x/c9/c2/ce/c9c2cebc51ba1e2f6238d6b5521388ec.jpg', // Replace with your image URLs
        },
        {
            id: 2,
            name: 'Handmade Clay Pot',
            price: '₹289.00',
            stockStatus: 'In Stock',
            imgUrl: 'https://i.pinimg.com/236x/26/7b/2a/267b2a9dd645720fac155631852be037.jpg', // Replace with your image URLs
        },
        {
            id: 3,
            name: 'Painting',
            price: '₹288.00',
            stockStatus: 'In Stock',
            imgUrl: 'https://i.pinimg.com/enabled_hi/236x/b5/ff/09/b5ff09594a1e69f0186c0bd08c2c9886.jpg', // Replace with your image URLs
        },
        {
            id: 4,
            name: 'Organic Cotton Scarf',
            price: '₹125.00',
            stockStatus: 'In Stock',
            imgUrl: 'https://i.pinimg.com/236x/e0/d3/16/e0d3166aa54093a637e77a8a76e7f4b4.jpg', // Replace with your image URLs
        },
    ];

    return (
        <div style={{ padding: '40px', maxWidth: '100%', margin: '0 auto', backgroundColor: '#f9f9f9' }}>
            <h1 style={{ textAlign: 'center', color: '#403F2B', fontSize: '2.5em' }}>My Wishlist</h1>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left', padding: '15px', borderBottom: '2px solid #E3E3E3', fontSize: '1.2em' }}>Product Name</th>
                        <th style={{ textAlign: 'left', padding: '15px', borderBottom: '2px solid #E3E3E3', fontSize: '1.2em' }}>Unit Price</th>
                        <th style={{ textAlign: 'left', padding: '15px', borderBottom: '2px solid #E3E3E3', fontSize: '1.2em' }}>Stock Status</th>
                        <th style={{ textAlign: 'left', padding: '15px', borderBottom: '2px solid #E3E3E3', fontSize: '1.2em' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id} style={{ borderBottom: '1px solid #E3E3E3' }}>
                            <td style={{ padding: '15px', display: 'flex', alignItems: 'center' }}>
                                <img src={item.imgUrl} alt={item.name} style={{ width: '80px', height: '80px', marginRight: '15px' }} />
                                {item.name}
                                <button style={{ marginLeft: '15px', border: 'none', background: 'transparent', cursor: 'pointer' }}>
                                    <DeleteIcon />
                                </button>
                            </td>
                            <td style={{ padding: '15px', fontSize: '1.2em' }}>{item.price}</td>
                            <td style={{ padding: '15px', fontSize: '1.2em' }}>{item.stockStatus}</td>
                            <td style={{ padding: '15px' }}>
                                <button style={{ background: '#403F2B', color: '#fff', padding: '15px 30px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1.2em' }}>
                                    Add to Cart
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WishlistPage;
