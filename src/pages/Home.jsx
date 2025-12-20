import { useState, useEffect } from 'react';
import './Home.css';
import { useCart } from '../context/CartContext'; // ← NUEVO IMPORT

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart(); // ← OBTENER FUNCIÓN DEL CONTEXT

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/pizzas');
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setPizzas(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching pizzas:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPizzas();
  }, []);

  // Función para manejar agregar al carrito
  const handleAddToCart = (pizza) => {
    addToCart(pizza);
    // Opcional: Mostrar notificación
    alert(`¡${pizza.name} agregada al carrito!`);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando pizzas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>¡Ups! Algo salió mal</h2>
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>
          Intentar de nuevo
        </button>
      </div>
    );
  }

  return (
    <div className="home-container">
      <h1 className="home-title">🍕 Nuestras Deliciosas Pizzas</h1>
      <p className="home-subtitle">Selecciona tu favorita</p>
      
      <div className="pizzas-grid">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-card">
            <div className="pizza-image-container">
              <img 
                src={pizza.img} 
                alt={pizza.name}
                className="pizza-image"
                loading="lazy"
              />
            </div>
            
            <div className="pizza-info">
              <h3 className="pizza-name">{pizza.name}</h3>
              
              <div className="pizza-ingredients">
                <strong>Ingredientes:</strong>
                <div className="ingredients-list">
                  {pizza.ingredients.map((ingredient, index) => (
                    <span key={index} className="ingredient-tag">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pizza-price-section">
                <span className="pizza-price">
                  ${pizza.price.toFixed(2)}
                </span>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(pizza)} // ← ACTUALIZADO
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;