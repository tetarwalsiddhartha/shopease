import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SearchBar.css';

const SearchBar = ({ initialQuery = '', onSearch }) => {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (onSearch) {
      onSearch(query);
    } else {
      // If no onSearch prop, navigate to search page with query
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search products"
      />
      <button type="submit" aria-label="Search">
        <span className="material-symbols-outlined">search</span>
      </button>
    </form>
  );
};

export default SearchBar;