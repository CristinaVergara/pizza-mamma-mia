import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Pizza = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchPizza = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(`http://localhost:5001/api/pizzas/${id}`);
        
        if (response.status === 404) {
          throw new Error(`Pizza con ID "${id}" no encontrada`);
        }
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: No se pudo cargar la pizza`);
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
  }, [id]);

  const handleAddToCart = () => {
    if (pizza) {
      addToCart(pizza);
      alert(`¡${pizza.name} agregada al carrito!`);
    }
  };


  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando pizza...</p>
      </div>
    );
  }


  if (error || !pizza) {
    return (
      <div className="error-container">
        <h2>🍕 Pizza No Encontrada</h2>
        <div className="alert alert-warning" style={{ maxWidth: '500px', margin: '20px auto' }}>
          <p><strong>Error:</strong> {error || 'La pizza solicitada no existe'}</p>
          <p className="mb-0">
            <strong>ID buscado:</strong> <code>{id}</code>
          </p>
        </div>
        <div className="mt-4">
          <Link to="/" className="btn btn-primary me-3">
            ← Volver al Menú
          </Link>
          <Link to="/pizza/p001" className="btn btn-outline-primary">
            Ver Pizza Margarita
          </Link>
        </div>
        <div className="mt-5">
          <p className="text-muted">
            IDs válidos: <code>p001</code>, <code>p002</code>, <code>p003</code>
          </p>
        </div>
      </div>
    );
  }

  
  return (
    <div className="pizza-detail-container">
      <div className="pizza-detail">
        {/* Sección de imagen */}
        <div className="pizza-image-section">
          <img 
            src={pizza.img} 
            alt={pizza.name}
            className="pizza-detail-image"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1513104890138-7c749659a591';
            }}
          />
        </div>

        {/* Sección de información */}
        <div className="pizza-info-section">
          <h1 className="pizza-detail-name">{pizza.name}</h1>
          
          <div className="price-section">
            <span className="price-label">Precio:</span>
            <span className="price-value">${pizza.price.toFixed(2)}</span>
          </div>

          <div className="ingredients-section">
            <h3>
              <span>🥗</span> Ingredientes
            </h3>
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
            <h3>
              <span>📝</span> Descripción
            </h3>
            <p className="pizza-description">{pizza.description}</p>
            <p className="mt-3">
              <strong>ID de la pizza:</strong> <code>{id}</code>
            </p>
            <p className="text-muted small">
              Datos obtenidos de: <code>GET /api/pizzas/{id}</code>
            </p>
          </div>

          <div className="action-section">
            <button 
              className="add-to-cart-large-btn"
              onClick={handleAddToCart}
            >
              <span className="btn-icon">🛒</span>
              Añadir al Carrito - ${pizza.price.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;