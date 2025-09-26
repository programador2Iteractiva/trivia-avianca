import { createContext, useState, useEffect } from 'react';
import { registerUser, saveUserActionLog, getRanking } from '../services/api';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Al cargar el componente, intentar obtener los datos del usuario desde localStorage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      const storedToken = localStorage.getItem('token');
      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
      }
    } catch (e) {
      console.error("Failed to parse user data from localStorage", e);
      // Limpiar en caso de datos corruptos
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  }, []);

  // Función para manejar el registro de usuarios
  const handleRegister = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const data = await registerUser(userData);
      // Guardar el token y el usuario en localStorage y en el estado
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setToken(data.token);
      setUser(data.user);
      return data;
    } catch (err) {
      setError(err);
      throw err; // Re-lanzar el error para que el componente que llama pueda manejarlo
    } finally {
      setLoading(false);
    }
  };

  // Función para guardar el log de acciones del juego
  const handleSaveLog = async (logData) => {
    const currentToken = token || localStorage.getItem('token');
    if (!currentToken) {
      const err = new Error("No hay un token de autenticación para guardar el log.");
      setError(err);
      throw err;
    }

    setLoading(true);
    setError(null);
    try {
      // El formato de answers_json debe ser un string JSON
      const formattedLogData = {
        ...logData,
        answers_json: JSON.stringify(logData.answers_json)
      };
      const data = await saveUserActionLog(formattedLogData, currentToken);
      return data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener el ranking
  const handleGetRanking = async () => {
    const currentToken = token || localStorage.getItem('token');
     if (!currentToken) {
      const err = new Error("No hay un token de autenticación para ver el ranking.");
      setError(err);
      throw err;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await getRanking(currentToken);
      setRanking(data); // Guardar el ranking en el estado
      return data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  
  // Función de logout
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);
  };


  return (
    <ApiContext.Provider 
      value={{ 
        user, 
        token, 
        ranking,
        loading, 
        error, 
        handleRegister,
        handleSaveLog,
        handleGetRanking,
        handleLogout,
        isAuthenticated: !!token // Un booleano para saber si el usuario está autenticado
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};