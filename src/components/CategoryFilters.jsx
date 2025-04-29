import { categories } from '../data/products';
import '../styles/CategoryFilters.css';

const CategoryFilters = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="category-filters">
      <h3>Categories</h3>
      <div className="category-buttons">
        {categories.map(category => (
          <button 
            key={category.id}
            className={`category-button ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilters;