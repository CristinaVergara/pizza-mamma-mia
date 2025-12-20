// src/components/Cart.jsx
import React, { useState } from 'react';
import { pizzaCart } from '../data/pizzas';

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increaseQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
    ).filter(item => item.quantity > 0));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🛒 Carrito de Compras</h2>
      
      <div style={styles.cartItems}>
        {cart.length === 0 ? (
          <p style={styles.emptyCart}>El carrito está vacío</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <div style={styles.itemInfo}>
                  <img src={item.image} alt={item.name} style={styles.itemImage} />
                  <div style={styles.itemDetails}>
                    <h3 style={styles.itemName}>{item.name}</h3>
                    <p style={styles.itemPrice}>${item.price.toLocaleString('es-CL')} c/u</p>
                  </div>
                </div>
                
                <div style={styles.quantityControls}>
                  <button 
                    onClick={() => decreaseQuantity(item.id)}
                    style={styles.quantityButton}
                  >
                    -
                  </button>
                  <span style={styles.quantity}>{item.quantity}</span>
                  <button 
                    onClick={() => increaseQuantity(item.id)}
                    style={styles.quantityButton}
                  >
                    +
                  </button>
                </div>
                
                <div style={styles.subtotal}>
                  ${(item.price * item.quantity).toLocaleString('es-CL')}
                </div>
              </div>
            ))}
            
            <div style={styles.totalContainer}>
              <h3 style={styles.totalTitle}>Total:</h3>
              <h3 style={styles.totalAmount}>
                ${calculateTotal().toLocaleString('es-CL')}
              </h3>
            </div>
            
            <button style={styles.payButton}>
              💳 Pagar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  title: {
    color: '#333',
    marginBottom: '2rem',
    textAlign: 'center',
    fontSize: '1.8rem'
  },
  cartItems: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '1.5rem'
  },
  emptyCart: {
    textAlign: 'center',
    color: '#666',
    fontSize: '1.1rem',
    padding: '2rem'
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    borderBottom: '1px solid #eee',
    marginBottom: '0.5rem'
  },
  itemInfo: {
    display: 'flex',
    alignItems: 'center',
    flex: 1
  },
  itemImage: {
    width: '60px',
    height: '60px',
    borderRadius: '8px',
    objectFit: 'cover',
    marginRight: '1rem'
  },
  itemDetails: {
    flex: 1
  },
  itemName: {
    margin: '0',
    fontSize: '1.1rem',
    color: '#333'
  },
  itemPrice: {
    margin: '0.25rem 0 0 0',
    color: '#666',
    fontSize: '0.9rem'
  },
  quantityControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  quantityButton: {
    backgroundColor: '#f0f0f0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  quantity: {
    minWidth: '30px',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  subtotal: {
    fontWeight: 'bold',
    fontSize: '1.1rem',
    color: '#d32f2f',
    minWidth: '100px',
    textAlign: 'right'
  },
  totalContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 1rem',
    borderTop: '2px solid #eee',
    marginTop: '1rem'
  },
  totalTitle: {
    margin: '0',
    fontSize: '1.3rem',
    color: '#333'
  },
  totalAmount: {
    margin: '0',
    fontSize: '1.5rem',
    color: '#d32f2f'
  },
  payButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '1rem 2rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    width: '100%',
    marginTop: '1rem',
    transition: 'background-color 0.3s ease'
  }
};

export default Cart;