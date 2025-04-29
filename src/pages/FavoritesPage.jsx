import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import '../styles/FavoritesPage.css';

const FavoritesPage = () => {
  const { favorites } = useCart();
  
  // Get the actual product objects from their IDs
  const favoriteProducts = products.filter(product => 
    favorites.includes(product.id)
  );
  
  // Empty favorites state
  if (favoriteProducts.length === 0) {
    return (
      <div className="empty-favorites">
        <span className="material-symbols-outlined">favorite</span>
        <h2>Your favorites list is empty</h2>
        <p>Products you favorite will be saved here. Start exploring!</p>
        <Link to="/shop" className="shop-now-button">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <h1>Your Favorites</h1>
        <p>Items you've saved for later.</p>
      </div>
      
      <div className="favorites-grid">
        {favoriteProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;