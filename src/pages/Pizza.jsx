import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Pizza = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Datos de ejemplo (deberías obtenerlos de tu backend)
  const pizzaData = {
    p001: {
      name: "Margarita Clásica",
      price: 12.99,
      img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca",
      ingredients: ["Salsa de tomate", "Mozzarella fresca", "Albahaca fresca", "Aceite de oliva"],
      description: "La pizza italiana por excelencia. Simple, fresca y deliciosa."
    },
    p002: {
      name: "Pepperoni Picante",
      price: 14.99,
      img: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
      ingredients: ["Salsa de tomate", "Mozzarella", "Pepperoni", "Orégano", "Pimiento"],
      description: "Para los amantes del picante. Pepperoni de alta calidad y mucho queso."
    },
    p003: {
      name: "Cuatro Quesos",
      price: 15.99,
      img: "https://images.unsplash.com/photo-1552539618-7e6e6f6c2484",
      ingredients: ["Mozzarella", "Gorgonzola", "Parmesano", "Fontina", "Nata"],
      description: "Una explosión de sabores queseros en cada bocado."
    }
  };

  // Obtener datos de la pizza o usar valores por defecto
  const pizza = pizzaData[id] || {
    name: `Pizza Especial #${id}`,
    price: 13.50,
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
    ingredients: ["Ingrediente especial 1", "Ingrediente especial 2", "Ingrediente secreto"],
    description: "Una pizza única creada especialmente para ti."
  };

  const handleAddToCart = () => {
    addToCart({
      id: id,
      name: pizza.name,
      price: pizza.price,
      img: pizza.img,
      ingredients: pizza.ingredients
    });
    alert(`¡${pizza.name} agregada al carrito!`);
  };

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
              e.target.src = "https://images.unsplash.com/photo-1513104890138-7c749659a591";
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
              <strong>ID de la pizza en el sistema:</strong> <code>{id}</code>
            </p>
            <p className="text-muted small">
              Esta ruta usa parámetros dinámicos: <code>/pizza/:id</code>
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