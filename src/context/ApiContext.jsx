import { createContext, useState, useEffect } from 'react';
import { registerUser, saveUserActionLog, getRanking } from '../services/api';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 1. Al cargar la aplicación, se limpia todo el localStorage.
  useEffect(() => {
    localStorage.clear();
  }, []);

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
      const err = new Error("No hay un token de autenticación para guardar el log.");
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
      throw err;
    } finally {
      setLoading(false);
    }
  };

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
      setRanking(data);
      return data;
    } catch (err) {
      setError(err);
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
        handleRegister,
        handleSaveLog,
        handleGetRanking,
        handleLogout,
        isAuthenticated: !!token
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};