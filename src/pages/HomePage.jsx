import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import { products, categories } from '../data/products';
import '../styles/HomePage.css';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  
  useEffect(() => {
    // Simulate featured products and new arrivals
    // In a real app, these would come from an API
    setFeaturedProducts(products.filter(p => p.rating >= 4.5).slice(0, 4));
    setNewArrivals(products.slice(0, 4));
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Discover Quality Products</h1>
          <p>Explore our curated collection of products designed for modern living.</p>
          <Link to="/shop" className="shop-now-button">Shop Now</Link>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <h2>Shop by Category</h2>
          <Link to="/shop" className="view-all-link">View All</Link>
        </div>
        
        <div className="categories-grid">
          {categories.filter(cat => cat.id !== 'all').map(category => (
            <Link to={`/shop?category=${category.id}`} key={category.id} className="category-card">
              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="section-header">
          <h2>Featured Products</h2>
          <Link to="/shop" className="view-all-link">View All</Link>
        </div>
        
        <ProductGrid products={featuredProducts} />
      </section>
      
      {/* Promo Banner */}
      <section className="promo-banner">
        <div className="promo-content">
          <h2>Summer Sale</h2>
          <p>Up to 40% off on selected items. Limited time offer.</p>
          <Link to="/shop" className="shop-now-button">Shop Now</Link>
        </div>
      </section>
      
      {/* New Arrivals Section */}
      <section className="new-arrivals-section">
        <div className="section-header">
          <h2>New Arrivals</h2>
          <Link to="/shop" className="view-all-link">View All</Link>
        </div>
        
        <ProductGrid products={newArrivals} />
      </section>
      
      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Join Our Newsletter</h2>
          <p>Subscribe to get updates on new products and special promotions.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;