import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useUser();
  const navigate = useNavigate();

  // CORREGIDO: estas son las variables que SÍ existen
  const cartItemCount = cart ? cart.length : 0;
  const totalPrice = cart.reduce((total, item) => total + (item.price || 0), 0);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

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
          
          {/* Lógica de usuario */}
          {user ? (
            <>
              <Link to="/profile" className="btn btn-outline-info btn-sm mx-1 text-decoration-none">
                👤 {user.email}
              </Link>
              <button 
                onClick={handleLogout} 
                className="btn btn-outline-danger btn-sm mx-1"
              >
                🚪 Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-primary btn-sm mx-1 text-decoration-none">
                🔐 Login
              </Link>
              <Link to="/register" className="btn btn-outline-primary btn-sm mx-1 text-decoration-none">
                📝 Registro
              </Link>
            </>
          )}
          
          {/* Carrito CORREGIDO: usa cartItemCount, NO totalItems */}
          <Link 
            to="/cart" 
            className="btn btn-success btn-sm mx-1 d-flex align-items-center text-decoration-none"
          >
            <span className="me-1">🛒</span>
            {cartItemCount > 0 ? (
              <>
                <span className="badge bg-danger rounded-pill ms-1 me-2">
                  {cartItemCount}  {/* ¡CORREGIDO! Antes decía totalItems */}
                </span>
                ${totalPrice.toFixed(2)}  {/* ¡CORREGIDO! Antes decía cartTotal */}
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