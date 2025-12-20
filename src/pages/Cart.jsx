import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // ← NUEVO IMPORT

const Cart = () => {
  const { 
    cart, 
    addToCart, 
    removeFromCart, 
    removeItemCompletely, 
    calculateTotal,
    clearCart 
  } = useCart();

  const cartTotal = calculateTotal();

  if (cart.length === 0) {
    return (
      <div className="container mt-5">
        <div className="text-center py-5">
          <div className="display-1 text-muted mb-4">🛒</div>
          <h2 className="mb-3">Tu carrito está vacío</h2>
          <p className="text-muted mb-4">
            Parece que aún no has agregado ninguna pizza a tu carrito.
          </p>
          <Link to="/" className="btn btn-primary btn-lg">
            🍕 Ver Pizzas
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4 mb-5">
      <h1 className="mb-4 text-center">🛒 Tu Carrito de Compras</h1>
      
      <div className="row">
        <div className="col-lg-8">
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h3 className="card-title mb-4">Productos ({cart.length})</h3>
              
              {cart.map((item) => (
                <div key={item.id} className="d-flex align-items-center border-bottom pb-3 mb-3">
                  <div className="flex-shrink-0 me-3">
                    <img 
                      src={item.img} 
                      alt={item.name}
                      className="rounded"
                      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1513104890138-7c749659a591';
                      }}
                    />
                  </div>
                  
                  <div className="flex-grow-1">
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="text-muted mb-2 small">
                      {item.ingredients.join(', ')}
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <div>
                        <span className="fw-bold text-danger fs-5">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <small className="text-muted ms-2">
                          (${item.price.toFixed(2)} c/u)
                        </small>
                      </div>
                      
                      <div className="d-flex align-items-center">
                        <button 
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => removeFromCart(item.id)}
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>
                        
                        <span className="mx-3 fw-bold">{item.quantity}</span>
                        
                        <button 
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => addToCart(item)}
                        >
                          +
                        </button>
                        
                        <button 
                          className="btn btn-outline-danger btn-sm ms-3"
                          onClick={() => removeItemCompletely(item.id)}
                        >
                          🗑️ Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="d-flex justify-content-between mt-3">
                <Link to="/" className="btn btn-outline-primary">
                  ← Continuar comprando
                </Link>
                <button 
                  className="btn btn-outline-danger"
                  onClick={clearCart}
                >
                  🗑️ Vaciar carrito
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card shadow-sm sticky-top" style={{ top: '20px' }}>
            <div className="card-body">
              <h3 className="card-title mb-4">Resumen del Pedido</h3>
              
              <div className="mb-3">
                {cart.map((item) => (
                  <div key={item.id} className="d-flex justify-content-between mb-2">
                    <span>
                      {item.name} x{item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <hr />
              
              <div className="d-flex justify-content-between mb-3">
                <span className="fw-bold">Total:</span>
                <span className="fw-bold fs-4 text-danger">${cartTotal.toFixed(2)}</span>
              </div>
              
              <div className="alert alert-info small mb-4">
                <i className="bi bi-info-circle me-1"></i>
                El total mostrado aquí es el mismo que aparece en el Navbar.
              </div>
              
              <button className="btn btn-success btn-lg w-100 py-3">
                🛒 Proceder al Pago
              </button>
              
              <p className="text-center text-muted small mt-3">
                * El pago será implementado en el siguiente hito
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;