import React from 'react';

const Navbar = ({ onNavigate }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Pizzería Mamma Mía</div>
      <div style={styles.navLinks}>
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          style={styles.navLink}
        >
          Home
        </a>
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            onNavigate('login');
          }}
          style={styles.navLink}
        >
          Login
        </a>
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            onNavigate('register');
          }}
          style={styles.navLink}
        >
          Register
        </a>
      </div>
    </nav>
  );
};

// Estilos que coinciden con el diseño del Hito 1
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#f8f9fa',
    borderBottom: '1px solid #dee2e6',
    fontFamily: 'Arial, sans-serif'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#d32f2f'
  },
  navLinks: {
    display: 'flex',
    gap: '1.5rem'
  },
  navLink: {
    textDecoration: 'none',
    color: '#495057',
    fontSize: '1rem',
    padding: '0.5rem 0',
    borderBottom: '2px solid transparent',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }
};

export default Navbar;