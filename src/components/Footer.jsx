import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Pizzería Mamma Mía</h5>
            <p>Las mejores pizzas artesanales desde 1990</p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0">
              © 2024 - Pizzería Mamma Mía! - Todos los derechos reservados
            </p>
            <p className="mb-0">
              Dirección: Calle Falsa 123, Santiago
            </p>
            <p className="mb-0">
              Teléfono: +56 9 1234 5678
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;