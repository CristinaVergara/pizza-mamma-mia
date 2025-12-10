import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
  // Datos con imágenes que SÍ funcionan
  const pizzas = [
    {
      id: 1,
      name: "Napolitana",
      price: 5950,
      ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
      img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Española",
      price: 6950,
      ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Pepperoni",
      price: 6950,
      ingredients: ["mozzarella", "pepperoni", "orégano"],
      img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div>
      <Header />
      
      <div className="container my-5">
        <h2 className="text-center mb-5 display-5">Nuestras Pizzas</h2>
        
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col">
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;