import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Pizza from './components/Pizza';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('pizza');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home': 
        return <Home />;
      case 'pizza': 
        return <Pizza />;
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
    <div className="App d-flex flex-column min-vh-100">
      <Navbar onNavigate={handleNavigation} />
      <Header />
      <main className="flex-grow-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;