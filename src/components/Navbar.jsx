import React from 'react';

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <span className="navbar-brand text-danger fw-bold fs-4">
          Pizzería Mamma Mía
        </span>
        
        <div className="d-flex">
          <button 
            onClick={() => onNavigate('home')}
            className="btn btn-outline-primary btn-sm mx-1"
          >
            Home
          </button>
          
          <button 
            onClick={() => onNavigate('login')}
            className="btn btn-outline-primary btn-sm mx-1"
          >
            Login
          </button>
          
          <button 
            onClick={() => onNavigate('register')}
            className="btn btn-outline-primary btn-sm mx-1"
          >
            Register
          </button>
          
          <button 
            onClick={() => onNavigate('cart')}
            className="btn btn-success btn-sm mx-1"
          >
            🛒 Carrito
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;