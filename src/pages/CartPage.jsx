import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';
import '../styles/CartPage.css';

const CartPage = () => {
  const { cart, clearCart } = useCart();

  // Empty cart state
  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <span className="material-symbols-outlined">shopping_cart</span>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Cart</h1>
        <button onClick={clearCart} className="clear-cart-btn">
          Clear Cart
        </button>
      </div>
      
      <div className="cart-container">
        <div className="cart-items">
          <div className="cart-items-header">
            <div className="header-product">Product</div>
            <div className="header-price">Price</div>
            <div className="header-quantity">Quantity</div>
            <div className="header-subtotal">Subtotal</div>
            <div className="header-remove"></div>
          </div>
          
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          
          <div className="cart-actions">
            <Link to="/shop" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
        
        <div className="cart-summary">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
