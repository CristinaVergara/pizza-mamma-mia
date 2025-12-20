import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';
import Pizza from './pages/Pizza';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Navbar />
        <Header />
        <main className="flex-grow-1">
          <Routes>
            {/* Ruta principal - Home */}
            <Route path="/" element={<Home />} />
            
            {/* Ruta para detalles de pizza con parámetro dinámico */}
            <Route path="/pizza/:id" element={<Pizza />} />
            
            {/* Rutas de autenticación */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Ruta del carrito de compras */}
            <Route path="/cart" element={<Cart />} />
            
            {/* Ruta del perfil de usuario (nueva para Hito 5) */}
            <Route path="/profile" element={<Profile />} />
            
            {/* Ruta comodín para 404 - debe ser la última */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;