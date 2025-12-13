import React from 'react';

const Header = () => {
  return (
    <div style={styles.header}>
      {/* Overlay oscuro para mejor contraste del texto */}
      <div style={styles.overlay}></div>
      
      <div style={styles.container}>
        <h1 style={styles.title}>Pizzería Mamma Mia!</h1>
        <p style={styles.subtitle}>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </div>
  );
};

const styles = {
  header: {
    position: 'relative',
    backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1680303989824-d82e58864df4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    padding: '4rem 1rem',
    textAlign: 'center',
    minHeight: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(33, 15, 15, 0.54)', // Rojo semitransparente
    zIndex: 1
  },
  container: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
    margin: '0 auto'
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textShadow: '3px 3px 8px rgba(0,0,0,0.7)',
    fontFamily: 'Arial, sans-serif'
  },
  subtitle: {
    fontSize: '1.5rem',
    opacity: '0.95',
    lineHeight: '1.6',
    textShadow: '2px 2px 6px rgba(0,0,0,0.6)',
    fontFamily: 'Arial, sans-serif'
  }
};

export default Header;