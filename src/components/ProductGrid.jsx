import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductGrid.css';

const ProductGrid = ({ products, category = 'all', searchQuery = '' }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // Apply filtering based on category and search query
  useEffect(() => {
    let result = products;
    
    // Filter by category if needed
    if (category !== 'all') {
      result = result.filter(product => product.category === category);
    }
    
    // Filter by search query if present
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(result);
  }, [products, category, searchQuery]);

  // If no products match the filters
  if (filteredProducts.length === 0) {
    return (
      <div className="no-products">
        <h2>No products found</h2>
        <p>Try adjusting your filters or search query</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;