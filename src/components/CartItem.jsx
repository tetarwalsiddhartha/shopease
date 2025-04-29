import { useCart } from '../context/CartContext';
import '../styles/CartItem.css';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    updateQuantity(item.id, newQuantity);
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const increaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>
      
      <div className="cart-item-quantity">
        <button 
          className="quantity-btn"
          onClick={decreaseQuantity}
          aria-label="Decrease quantity"
        >
          <span className="material-symbols-outlined">remove</span>
        </button>
        
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          aria-label="Quantity"
        />
        
        <button 
          className="quantity-btn"
          onClick={increaseQuantity}
          aria-label="Increase quantity"
        >
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>
      
      <div className="cart-item-subtotal">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      
      <button 
        className="remove-btn"
        onClick={() => removeFromCart(item.id)}
        aria-label="Remove item"
      >
        <span className="material-symbols-outlined">delete</span>
      </button>
    </div>
  );
};

export default CartItem;