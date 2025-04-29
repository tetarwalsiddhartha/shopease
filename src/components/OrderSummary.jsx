import { useCart } from '../context/CartContext';
import '../styles/OrderSummary.css';

const OrderSummary = ({ showCheckoutButton = true }) => {
  const { cart, getCartTotal, clearCart } = useCart(); // <-- Added clearCart
  
  // Calculate subtotal
  const subtotal = getCartTotal();

  // Calculate shipping (free over $50, otherwise $5.99)
  const shipping = subtotal > 50 ? 0 : 5.99;
  
  // Calculate tax (8.25%)
  const tax = subtotal * 0.0825;
  
  // Calculate total
  const total = subtotal + shipping + tax;
  
  // Optional: confirm before clearing cart
  const handleCheckout = () => {
    if (window.confirm(`🛍️ Order Placed Successfully!
    Thank you for your purchase! 🎉
    Your order number is #GD-45872910IN.`)) {
      clearCart();
    }
  };

  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      
      <div className="summary-row">
        <span>Items ({cart.reduce((count, item) => count + item.quantity, 0)})</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      
      <div className="summary-row">
        <span>Shipping & Handling</span>
        <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
      </div>
      
      <div className="summary-row">
        <span>Estimated Tax</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      
      <div className="summary-total">
        <span>Order Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      
      {showCheckoutButton && (
        <button className="checkout-button" onClick={handleCheckout}>
          Proceed to Checkout 
        </button>
      )}
      
      {subtotal < 50 && (
        <div className="free-shipping-message">
          Add ${(50 - subtotal).toFixed(2)} more to qualify for FREE shipping!
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
