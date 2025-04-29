import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import '../styles/ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleFavorite, isFavorite } = useCart();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const foundProduct = products.find(p => p.id === parseInt(id, 10));
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Find related products (same category, excluding current product)
      const related = products
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      
      setRelatedProducts(related);
    }
    
    setLoading(false);
  }, [id]);
  
  // If product not found
  if (!loading && !product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>Sorry, we couldn't find the product you're looking for.</p>
        <button onClick={() => navigate('/shop')} className="back-to-shop">
          Back to Shop
        </button>
      </div>
    );
  }
  
  // Loading state
  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
        <p>Loading product details...</p>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value > 0 ? value : 1);
  };

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-images">
          <div className="main-image">
            <img src={product.image} alt={product.name} />
          </div>
          
          {/* If we had multiple images per product, we would map through them here */}
        </div>
        
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>
          
          <div className="product-meta">
            <div className="product-rating">
              <span className="material-symbols-outlined">star</span>
              <span>{product.rating} ({product.reviews} reviews)</span>
            </div>
            <div className="product-category">Category: {product.category}</div>
          </div>
          
          <div className="product-price">${product.price.toFixed(2)}</div>
          
          <div className="product-description">
            <p>{product.description}</p>
          </div>
          
          <div className="product-features">
            <h3>Key Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          {product.colors && (
            <div className="product-colors">
              <h3>Available Colors</h3>
              <div className="color-options">
                {product.colors.map((color, index) => (
                  <div key={index} className="color-option">
                    {color}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {product.sizes && (
            <div className="product-sizes">
              <h3>Available Sizes</h3>
              <div className="size-options">
                {product.sizes.map((size, index) => (
                  <div key={index} className="size-option">
                    {size}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="stock-info">
            <span className={`stock-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
              {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
            </span>
          </div>
          
          <div className="product-actions">
            <div className="quantity-selector">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="quantity-btn"
              >
                <span className="material-symbols-outlined">remove</span>
              </button>
              
              <input 
                type="number" 
                min="1" 
                value={quantity} 
                onChange={handleQuantityChange}
                className="quantity-input"
              />
              
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="quantity-btn"
              >
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
            
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              Add to Cart
            </button>
            
            <button 
              className={`favorite-btn ${isFavorite(product.id) ? 'active' : ''}`}
              onClick={() => toggleFavorite(product.id)}
            >
              <span className="material-symbols-outlined">
                {isFavorite(product.id) ? 'favorite' : 'favorite_border'}
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="related-products">
          <h2>You May Also Like</h2>
          <ProductGrid products={relatedProducts} />
        </div>
      )}
    </div>
  );
};

export default ProductPage;