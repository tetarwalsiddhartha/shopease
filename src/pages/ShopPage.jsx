import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductGrid from '../components/ProductGrid';
import CategoryFilters from '../components/CategoryFilters';
import SearchBar from '../components/SearchBar';
import { products } from '../data/products';
import '../styles/ShopPage.css';

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialQuery = searchParams.get('q') || '';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    
    if (selectedCategory !== 'all') {
      params.set('category', selectedCategory);
    }
    
    if (searchQuery) {
      params.set('q', searchQuery);
    }
    
    setSearchParams(params);
  }, [selectedCategory, searchQuery, setSearchParams]);
  
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Shop Our Products</h1>
        <p>Discover our entire collection of premium products.</p>
      </div>
      
      <div className="shop-container">
        <aside className="shop-sidebar">
          <div className="search-container">
            <SearchBar initialQuery={searchQuery} onSearch={handleSearch} />
          </div>
          
          <CategoryFilters
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
          
          {/* We could add more filters here like price range, ratings, etc. */}
        </aside>
        
        <main className="shop-main">
          <div className="shop-results-header">
            <p className="results-count">
              Showing {products.filter(p => 
                (selectedCategory === 'all' || p.category === selectedCategory) && 
                (searchQuery === '' || 
                  p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  p.description.toLowerCase().includes(searchQuery.toLowerCase())
                )
              ).length} products
            </p>
            
            <div className="sort-dropdown">
              <label htmlFor="sort-select">Sort by:</label>
              <select id="sort-select">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>
          
          <ProductGrid 
            products={products} 
            category={selectedCategory} 
            searchQuery={searchQuery} 
          />
        </main>
      </div>
    </div>
  );
};

export default ShopPage;