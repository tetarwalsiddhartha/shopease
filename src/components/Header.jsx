import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Header.css';

const Header = () => {
  const { getCartItemsCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">ShopEase</Link>
        </div>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>
          <Link to="/favorites" onClick={() => setIsMobileMenuOpen(false)}>Favorites</Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
        </div>
        
        <div className="header-actions">
          <Link to="/search" className="icon-btn">
            <span className="material-symbols-outlined">search</span>
          </Link>
          <Link to="/favorites" className="icon-btn">
            <span className="material-symbols-outlined">favorite</span>
          </Link>
          <Link to="/cart" className="icon-btn cart-icon">
            <span className="material-symbols-outlined">shopping_cart</span>
            {getCartItemsCount() > 0 && <span className="cart-badge">{getCartItemsCount()}</span>}
          </Link>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span className="material-symbols-outlined">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;