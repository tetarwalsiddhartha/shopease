import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import '../styles/SearchPage.css';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const results = products.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) || 
        product.category.toLowerCase().includes(query)
      );
      
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);
  
  const handleSearch = (query) => {
    setSearchQuery(query);
    setSearchParams({ q: query });
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <h1>Search Products</h1>
        <SearchBar initialQuery={searchQuery} onSearch={handleSearch} />
      </div>
      
      {searchQuery ? (
        <div className="search-results">
          <h2>Search Results for "{searchQuery}"</h2>
          
          {searchResults.length > 0 ? (
            <>
              <p className="results-count">{searchResults.length} products found</p>
              <ProductGrid products={searchResults} />
            </>
          ) : (
            <div className="no-results">
              <p>No products found matching your search.</p>
              <h3>Suggestions:</h3>
              <ul>
                <li>Check the spelling of your search terms</li>
                <li>Try using fewer or different keywords</li>
                <li>Browse our product categories instead</li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="search-prompt">
          <p>Enter a search term to find products.</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;