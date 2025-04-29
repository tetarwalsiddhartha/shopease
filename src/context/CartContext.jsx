import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Try to get the cart from localStorage
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  const [favorites, setFavorites] = useState(() => {
    // Try to get favorites from localStorage
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Add item to cart
  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        // Item already exists, update quantity
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        // Item doesn't exist, add new item
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Update item quantity
  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart => 
      prevCart.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Toggle favorite status
  const toggleFavorite = (productId) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(productId)) {
        return prevFavorites.filter(id => id !== productId);
      } else {
        return [...prevFavorites, productId];
      }
    });
  };

  // Check if product is in favorites
  const isFavorite = (productId) => {
    return favorites.includes(productId);
  };

  // Get cart total
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Get cart items count
  const getCartItemsCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cart,
      favorites,
      addToCart,
      removeFromCart,
      updateQuantity,
      toggleFavorite,
      isFavorite,
      getCartTotal,
      getCartItemsCount,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};