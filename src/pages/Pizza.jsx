import { useState, useEffect } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const pizzaId = 'p001';

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/pizzas/${pizzaId}`);
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: Pizza no encontrada`);
        }
        
        const data = await response.json();
        setPizza(data);
        
      } catch (err) {
        setError(err.message);
        console.error('Error fetching pizza:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [pizzaId]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando información de la pizza...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Pizza no encontrada</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Intentar de nuevo
        </button>
      </div>
    );
  }

  if (!pizza) {
    return (
      <div className="not-found-container">
        <h2>No se encontró la pizza</h2>
      </div>
    );
  }

  return (
    <div className="pizza-detail-container">
      <div className="pizza-detail">
        <div className="pizza-image-section">
          <img 
            src={pizza.img} 
            alt={pizza.name}
            className="pizza-detail-image"
          />
        </div>
        
        <div className="pizza-info-section">
          <h1 className="pizza-detail-name">
            {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
          </h1>
          
          <div className="price-section">
            <span className="price-label">Precio:</span>
            <span className="price-value">${pizza.price.toLocaleString()}</span>
          </div>
          
          <div className="ingredients-section">
            <h3>🍕 Ingredientes:</h3>
            <ul className="ingredients-list">
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                  <span className="ingredient-icon">✓</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="description-section">
            <h3>📖 Descripción:</h3>
            <p className="pizza-description">{pizza.desc}</p>
          </div>
          
          <div className="action-section">
            <button className="add-to-cart-large-btn">
              <span className="btn-icon">🛒</span>
              Añadir al carrito - ${pizza.price.toLocaleString()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;