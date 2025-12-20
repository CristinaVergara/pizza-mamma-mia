import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

 
  const addToCart = (pizza) => {
    setCart(prevCart => {
      
      const existingItemIndex = prevCart.findIndex(item => item.id === pizza.id);
      
      if (existingItemIndex >= 0) {
       
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1
        };
        return updatedCart;
      } else {
        
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  
  const removeFromCart = (pizzaId) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.id === pizzaId);
      
      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCart];
        
        if (updatedCart[existingItemIndex].quantity > 1) {
          
          updatedCart[existingItemIndex] = {
            ...updatedCart[existingItemIndex],
            quantity: updatedCart[existingItemIndex].quantity - 1
          };
          return updatedCart;
        } else {
          
          return updatedCart.filter(item => item.id !== pizzaId);
        }
      }
      return prevCart;
    });
  };

  
  const removeItemCompletely = (pizzaId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== pizzaId));
  };

  
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  
  const calculateTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  
  const clearCart = () => {
    setCart([]);
  };

  
  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    removeItemCompletely,
    calculateTotal,
    calculateTotalItems,
    clearCart
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de CartProvider');
  }
  return context;
};