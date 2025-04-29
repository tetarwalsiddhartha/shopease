import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart, toggleFavorite, isFavorite } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    addToCart(product, 1);
    
    // Reset animation after a short delay
    setTimeout(() => {
      setIsAdding(false);
    }, 600);
  };
  
  const handleToggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product.id);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
          <button 
            className={`favorite-button ${isFavorite(product.id) ? 'active' : ''}`} 
            onClick={handleToggleFavorite}
            aria-label={isFavorite(product.id) ? "Remove from favorites" : "Add to favorites"}
          >
            <span className="material-symbols-outlined">
              {isFavorite(product.id) ? 'favorite' : 'favorite_border'}
            </span>
          </button>
        </div>
        
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-category">{product.category}</p>
          <div className="product-price-row">
            <p className="product-price">${product.price.toFixed(2)}</p>
            <div className="product-rating">
              <span className="material-symbols-outlined">star</span>
              <span>{product.rating}</span>
            </div>
          </div>
        </div>
      </Link>
      
      <button 
        className={`add-to-cart-button ${isAdding ? 'adding' : ''}`} 
        onClick={handleAddToCart}
      >
        {isAdding ? 'Added!' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;