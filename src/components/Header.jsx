import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://livedemo00.template-help.com/opencart_62294/image/cache/catalog/slide-2-2050x689.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '2rem',
    width: '100%'
  };
80
  return (
    <header style={headerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="display-4 fw-bold mb-4">
              Pizzería Mamma Mía
            </h1>
            <p className="lead fs-3 mb-0">
              Las mejores pizzas artesanales con ingredientes frescos y de la más alta calidad
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;