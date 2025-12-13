import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
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
      default: 
        return <Home />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onNavigate={handleNavigation} />
      
      <main style={{ flex: 1, padding: '2rem' }}>
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;