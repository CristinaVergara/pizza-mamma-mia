import { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home': 
        return <Home />;
      case 'login': 
        return <Login />;
      case 'register': 
        return <Register />;
      case 'cart': 
        return <Cart />;
      default: 
        return <Home />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* 1. Navbar con navegación */}
      <Navbar onNavigate={handleNavigation} />
      
      {/* 2. Header con imagen de fondo y overlay */}
      <Header />
      
      {/* 3. Contenido principal según navegación */}
      <main className="flex-grow-1">
        {renderPage()}
      </main>
      
      {/* 4. Footer */}
      <Footer />
    </div>
  );
};

export default App;