import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // ← NUEVO IMPORT

const Navbar = () => {
  const { calculateTotal, calculateTotalItems } = useCart(); // ← USAR CONTEXT
  const cartTotal = calculateTotal();
  const totalItems = calculateTotalItems();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand text-danger fw-bold fs-4">
          🍕 Pizzería Mamma Mía
        </Link>
        
        <div className="d-flex align-items-center">
          {/* Home */}
          <Link to="/" className="btn btn-outline-primary btn-sm mx-1 text-decoration-none">
            🏠 Home
          </Link>
          
          {/* Login */}
          <Link to="/login" className="btn btn-outline-primary btn-sm mx-1 text-decoration-none">
            🔐 Login
          </Link>
          
          {/* Register */}
          <Link to="/register" className="btn btn-outline-primary btn-sm mx-1 text-decoration-none">
            📝 Register
          </Link>
          
          {/* Perfil */}
          <Link to="/profile" className="btn btn-outline-info btn-sm mx-1 text-decoration-none">
            👤 Perfil
          </Link>
          
          {/* Carrito con total dinámico */}
          <Link 
            to="/cart" 
            className="btn btn-success btn-sm mx-1 d-flex align-items-center text-decoration-none"
          >
            <span className="me-1">🛒</span>
            {totalItems > 0 ? (
              <>
                <span className="badge bg-danger rounded-pill ms-1 me-2">{totalItems}</span>
                ${cartTotal.toFixed(2)}
              </>
            ) : (
              'Carrito'
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;