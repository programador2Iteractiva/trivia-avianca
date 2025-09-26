import { createContext, useState, useEffect } from 'react';
import { registerUser, saveUserActionLog, getRanking } from '../services/api';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(null); // Nuevo estado para la alerta

  // 1. Al cargar la aplicación, se limpia todo el localStorage.
  useEffect(() => {
    localStorage.clear();
  }, []);

  const clearAlert = () => setAlert(null);

  const handleRegister = async (userData) => {
    setLoading(true);
    setError(null);
    try {
      const data = await registerUser(userData);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      setToken(data.token);
      setUser(data.user);
      return data;
    } catch (err) {
      setError(err);
      console.log("Este es el error que voy a mostrar: " + err)
      setAlert('Hubo un error al registrar tus datos. Por favor, inténtalo de nuevo.'); // Mostrar alerta
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);
    console.log("LocalStorage y sesión limpiados.");
  };

  const handleSaveLog = async (logData) => {
    const currentToken = token || localStorage.getItem('token');
    if (!currentToken) {
      setError(err);
      throw err;
    }

    setLoading(true);
    setError(null);
    try {
      const formattedLogData = {
        ...logData,
        answers_json: JSON.stringify(logData.answers_json)
      };
      const data = await saveUserActionLog(formattedLogData, currentToken);
      
      // 2. Después de guardar el puntaje, se limpia el localStorage.
      handleLogout();
      
      return data;
    } catch (err) {
      setError(err);
      setAlert('Ocurrió un error al guardar tu puntuación.'); // Mostrar alerta
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleGetRanking = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getRanking();
      setRanking(data);
      return data;
    } catch (err) {
      setError(err);
      setAlert('No se pudo cargar el ranking.'); // Mostrar alerta
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApiContext.Provider 
      value={{ 
        user, 
        token, 
        ranking,
        loading, 
        error, 
        alert, // Pasar el estado de la alerta
        handleRegister,
        handleSaveLog,
        handleGetRanking,
        handleLogout,
        clearAlert, // Pasar la función para limpiar la alerta
        isAuthenticated: !!token
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};