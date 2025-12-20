import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">🍕 404 - ¡Pizza no encontrada!</h1>
        <p className="not-found-text">
          Lo sentimos, la página que buscas se ha perdido como una pizza en el horno.
        </p>
        <div className="not-found-pizza">
          <div className="pizza-slice">🍕</div>
          <div className="pizza-slice">🍕</div>
          <div className="pizza-slice">🍕</div>
        </div>
        <Link to="/" className="not-found-button">
          Volver al Menú Principal
        </Link>
      </div>
    </div>
  );
};

export default NotFound;