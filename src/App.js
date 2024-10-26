import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import ShopCollections from './components/ShopCollections';
import ShoppingPage from './components/ShoppingPage';
import FAQ from './components/FAQ';
import NotFound from './components/NotFound';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Blogs from './components/Blogs';
import AuthForm from './components/AuthForm';
import Wishlist from './components/Wishlist';
//import Cart from './components/Cart';
import CartPage from './components/Cart';
import SellerProfile from './components/SellerProfile';
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import ShippingPolicy from './components/ShippingPolicy';
import CookiePolicy from './components/CookiePolicy';
import BeASeller from './components/BeASeller';
import Kalamitra from './components/Kalamitra';



function App() {
  return (
    <div className="App">
      
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/blogs" element={<Blogs/>}/>
          <Route path="/shop" element={<ShoppingPage/>}/>
          <Route path="/kalamitra" element={<Kalamitra/>}/>
          <Route path="/faq" element={<FAQ/>}/>
          <Route path="*" element={<NotFound/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/login" element={<AuthForm/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/seller-profile" element={<SellerProfile/>}/>
          <Route path="/terms-and-conditions" element={<Terms/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
          <Route path="/refund-policy" element={<RefundPolicy/>}/>
          <Route path="/shipping-policy" element={<ShippingPolicy/>}/>
          <Route path="/cookie-policy" element={<CookiePolicy/>}/>
          <Route path="/be-a-seller" element={<BeASeller/>}/>
          
        </Routes>
        <Footer/>
      </div>
    
      
      
      
    </div>
  );
}

export default App;
