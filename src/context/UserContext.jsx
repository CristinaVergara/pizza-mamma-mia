import { createContext, useState, useContext, useEffect } from 'react';

// 1. Crear el contexto
const UserContext = createContext();

// 2. Hook personalizado para usar el contexto (¡EXPORT CORRECTO!)
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe usarse dentro de UserProvider');
  }
  return context;
};

// 3. Provider del contexto (¡EXPORT CORRECTO!)
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);
  
  const API_URL = 'http://localhost:5001/api';

  useEffect(() => {
    console.log('🔄 UserProvider montado');
    if (token) {
      fetchProfile();
    } else {
      setLoading(false);
    }
  }, []);

  // Función auxiliar para login simulado
  const simulatedLogin = async (email) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const mockToken = 'mock_jwt_' + Date.now();
    const mockUser = { email: email };
    
    localStorage.setItem('token', mockToken);
    setToken(mockToken);
    setUser(mockUser);
    setLoading(false);
    
    return { success: true, message: 'Modo simulación' };
  };

  // Login
  const login = async (email, password) => {
    console.log('🔐 Login intentado para:', email);
    
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('token', data.token);
        setToken(data.token);
        setUser({ email: data.email });
        setLoading(false);
        return { success: true };
      } else {
        console.log('🔄 Usando simulación (backend falló)');
        return await simulatedLogin(email);
      }
    } catch (error) {
      console.log('🔄 Usando simulación (error de conexión)');
      return await simulatedLogin(email);
    }
  };

  // Registro
  const register = async (email, password) => {
    console.log('📝 Registro intentado para:', email);
    
    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('token', data.token);
        setToken(data.token);
        setUser({ email: data.email });
        setLoading(false);
        return { success: true };
      } else {
        return await simulatedLogin(email);
      }
    } catch (error) {
      return await simulatedLogin(email);
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  // Obtener perfil
  const fetchProfile = async () => {
    if (!token) return;
    
    try {
      const res = await fetch(`${API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      }
    } catch (error) {
      console.error('Error obteniendo perfil:', error);
    } finally {
      setLoading(false);
    }
  };

  // Checkout
  const sendCheckout = async (cart) => {
    if (!token) throw new Error('No autenticado');
    
    try {
      const res = await fetch(`${API_URL}/checkouts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });
      
      const data = await res.json();
      return res.ok 
        ? { success: true, data } 
        : { success: false, message: data.message };
    } catch (error) {
      return { success: false, message: error.message };
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
        sendCheckout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};