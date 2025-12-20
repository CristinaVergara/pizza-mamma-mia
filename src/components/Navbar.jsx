import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo con Link a Home */}
        <Link 
          to="/" 
          className="navbar-brand text-danger fw-bold fs-4 text-decoration-none"
        >
          🍕 Pizzería Mamma Mía
        </Link>
        
        <div className="d-flex align-items-center">
          {/* Home */}
          <Link 
            to="/"
            className="btn btn-outline-primary btn-sm mx-1 text-decoration-none"
          >
            🏠 Home
          </Link>
          
          {/* Login */}
          <Link 
            to="/login"
            className="btn btn-outline-primary btn-sm mx-1 text-decoration-none"
          >
            🔐 Login
          </Link>
          
          {/* Register */}
          <Link 
            to="/register"
            className="btn btn-outline-primary btn-sm mx-1 text-decoration-none"
          >
            📝 Register
          </Link>
          
          {/* Perfil (nuevo para Hito 5) */}
          <Link 
            to="/profile"
            className="btn btn-outline-info btn-sm mx-1 text-decoration-none"
          >
            👤 Perfil
          </Link>
          
          {/* Carrito con icono y total */}
          <Link 
            to="/cart"
            className="btn btn-success btn-sm mx-1 d-flex align-items-center text-decoration-none"
          >
            <span className="me-1">🛒</span>
            Carrito
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;