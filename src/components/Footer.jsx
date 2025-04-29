import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>ShopEase</h3>
          <p>Discover elegant, high-quality products at affordable prices. Simplifying shopping for the modern consumer.</p>
        </div>
        
        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/shop?category=furniture">Furniture</Link></li>
            <li><Link to="/shop?category=electronics">Electronics</Link></li>
            <li><Link to="/shop?category=clothing">Clothing</Link></li>
            <li><Link to="/shop?category=accessories">Accessories</Link></li>
            <li><Link to="/shop?category=home">Home & Kitchen</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/shipping">Shipping & Returns</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Stay Connected</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <span className="material-symbols-outlined">facebook</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <span className="material-symbols-outlined">chat</span>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
              <span className="material-symbols-outlined">push_pin</span>
            </a>
          </div>
          <div className="newsletter">
            <h4>Subscribe to our newsletter</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} ShopEase. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;