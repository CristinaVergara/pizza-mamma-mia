import React from 'react';

const Navbar = () => {
 
  const token = false; 
  const total = 25000; 
  
  
  const formatPrice = (price) => {
    return price.toLocaleString('es-CL');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          🍕 Pizzería Mamma Mía
        </a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home - SIEMPRE visible */}
            <li className="nav-item">
              <button className="btn btn-link nav-link text-white">Home</button>
            </li>
            
            {/* Profile y Logout - SOLO si token=true */}
            {token ? (
              <>
                <li className="nav-item">
                  <button className="btn btn-link nav-link text-white">Profile</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link text-white">Logout</button>
                </li>
              </>
            ) : (
              
              <>
                <li className="nav-item">
                  <button className="btn btn-link nav-link text-white">Login</button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link text-white">Register</button>
                </li>
              </>
            )}
            
            {/* Total - SIEMPRE visible */}
            <li className="nav-item">
              <button className="btn btn-outline-warning ms-2">
                Total: ${formatPrice(total)}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;