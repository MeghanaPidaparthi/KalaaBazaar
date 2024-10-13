import React, { useState, useEffect } from 'react';
// Import images (adjust paths according to your structure)
import incenseBurner from '../assets/IncenseBurner2.png';
import Tapestry from '../assets/Tapestry.png';
import cushionCovers from '../assets/Cushion-covers.png';
import soap from "../assets/soap.png";
import Beading from "../assets/Beading-kit.png";
import essential from "../assets/essential-oil.png";
import incenseCombo from "../assets/incense-holder-combo.png";
import Tote from "../assets/tote-bag.png";
import Paintings from "../assets/Paintings.png";
import dcorDiya from "../assets/dcor-diya.png";
import ceramic from "../assets/ceramic-pots.png";

const products = [
  { id: 1, name: "Incense Burner", price: 699, popularity: 5, image: incenseBurner, description: "A beautiful incense burner made from high-quality materials." },
  { id: 2, name: "Tapestry", price: 89, popularity: 2, image: Tapestry, description: "A colorful tapestry to enhance your home decor." },
  { id: 3, name: "Decorative cushion covers", price: 335, popularity: 3, image: cushionCovers, description: "Soft and stylish cushion covers for your living space." },
  { id: 4, name: "Handmade vanilla flavoured soap", price: 95, popularity: 4, image: soap, description: "Organic handmade soap with a delightful vanilla scent." },
  { id: 5, name: "Beading kit", price: 469, popularity: 1, image: Beading, description: "A fun beading kit for creative projects." },
  { id: 6, name: "Lavender and Lemongrass essential oil combo", price: 1339, popularity: 6, image: essential, description: "A calming essential oil combo for relaxation." },
  { id: 7, name: "Incense sticks and holder combo", price: 489, popularity: 7, image: incenseCombo, description: "Perfect for creating a soothing atmosphere." },
  { id: 8, name: "Eco-friendly floral tote bag", price: 129, popularity: 8, image: Tote, description: "A stylish and eco-friendly tote bag." },
  { id: 9, name: "Madhubani Painting", price: 359, popularity: 9, image: Paintings, description: "Stunning Madhubani art for your walls." },
  { id: 10, name: "Decorated diyas (set of 6)", price: 129, popularity: 10, image: dcorDiya, description: "Beautifully decorated diyas for festive occasions." },
  { id: 11, name: "Ceramic pot set", price: 749, popularity: 11, image: ceramic, description: "Elegant ceramic pots for indoor gardening." },
];

const ShoppingPage = () => {
  const [cart, setCart] = useState([]);
  const [sortOption, setSortOption] = useState('recommended');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case 'priceLowToHigh':
        return a.price - b.price;
      case 'priceHighToLow':
        return b.price - a.price;
      case 'popularityLowToHigh':
        return a.popularity - b.popularity;
      case 'popularityHighToLow':
        return b.popularity - a.popularity;
      default:
        return 0; // Default to no sorting
    }
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setQuantity(1); // Reset quantity when closing the modal
  };

  const handleAddToCart = () => {
    const productInCart = cart.find(item => item.id === selectedProduct.id);
    if (productInCart) {
      // Update the quantity if the product already exists in the cart
      setCart(cart.map(item => 
        item.id === selectedProduct.id 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      // Add new product to the cart
      setCart([...cart, { ...selectedProduct, quantity }]);
    }
    handleCloseModal(); // Close modal after adding to cart
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ fontFamily: "Fraunces", fontWeight: 400, fontSize: "40px", textAlign: 'center', marginBottom: '30px' }}>
        All Products
      </h1>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <label style={{ fontFamily: "Fraunces", fontSize: "20px", marginRight: "10px" }}>Sort :</label>
        <select
          style={{ fontFamily: "Fraunces", fontSize: "20px", padding: '5px 10px' }}
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="recommended">Recommended</option>
          <option value="popularityLowToHigh">Popularity: Low to High</option>
          <option value="popularityHighToLow">Popularity: High to Low</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            style={{
              width: "300px",
              height: "400px",
              margin: "20px",
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              borderRadius: "20px",
              cursor: "pointer",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
            onClick={() => handleProductClick(product)}
          >
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "10px",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              <p style={{ fontFamily: "Fraunces", fontSize: "20px", margin: 0 }}>{product.name}</p>
              <p style={{ fontFamily: "Fraunces", fontSize: "18px", margin: 0 }}>₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Product Details */}
      {isModalOpen && selectedProduct && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div style={{ backgroundColor: "white", padding: "40px", borderRadius: "10px", maxWidth: "500px", width: "100%" }}>
            <h2 style={{ fontFamily: "Fraunces", fontSize: "24px", marginBottom: "20px" }}>{selectedProduct.name}</h2>
            <p style={{ fontFamily: "Fraunces", fontSize: "18px", marginBottom: "20px" }}>{selectedProduct.description}</p>
            <p style={{ fontFamily: "Fraunces", fontSize: "18px", marginBottom: "20px" }}>Price: ₹{selectedProduct.price}</p>

            <label style={{ fontFamily: "Fraunces", fontSize: "18px" }}>Quantity:</label>
            <input
              type="number"
              value={quantity}
              min={1}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              style={{
                fontFamily: "Fraunces",
                fontSize: "18px",
                padding: "5px",
                margin: "10px 0",
                width: "60px",
              }}
            />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button
                style={{
                  backgroundColor: "green",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontFamily: "Fraunces",
                  fontSize: "18px",
                  border: 'none'
                }}
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
              <button
                style={{
                  backgroundColor: "gray",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontFamily: "Fraunces",
                  fontSize: "18px",
                  border: 'none'
                }}
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Section */}
      <div style={{ marginTop: '50px' }}>
        <h2 style={{ fontFamily: "Fraunces", fontSize: "30px" }}>Cart</h2>
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '10px 0' }}>
                <p style={{ fontFamily: "Fraunces", fontSize: "18px" }}>
                  {item.name} - ₹{item.price} x {item.quantity}
                </p>
                <button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontFamily: "Fraunces",
                    border: 'none'
                  }}
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ fontFamily: "Fraunces", fontSize: "18px" }}>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingPage;
