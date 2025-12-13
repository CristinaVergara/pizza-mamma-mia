import React from 'react';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 shadow-lg border-0">
      <img 
        src={img} 
        className="card-img-top" 
        alt={name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title text-danger fw-bold">{name}</h5>
        
        
        <p className="card-text">
          <strong className="text-muted">Ingredientes:</strong>
          <ul className="mt-2" style={{ paddingLeft: '1.5rem', marginBottom: '0' }}>
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-dark">
                {ingredient}
              </li>
            ))}
          </ul>
        </p>
      </div>
      <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center">
        <h4 className="text-success fw-bold mb-0">${price.toLocaleString('es-CL')}</h4>
        <div>
          <button className="btn btn-outline-primary btn-sm me-2">
            Ver más
          </button>
          <button className="btn btn-danger btn-sm">
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;