import React from 'react';
import { pizzas } from '../data/pizzas';
import CardPizza from './CardPizza';

const Home = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center text-danger mb-4">🍕 Nuestras Pizzas</h1>
      <p className="text-center text-muted mb-5">Selecciona tu pizza favorita</p>
      
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col">
            <CardPizza 
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;