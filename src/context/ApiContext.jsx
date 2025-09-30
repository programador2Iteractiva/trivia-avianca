import { createContext, useState, useEffect } from 'react';
import { registerUser, saveUserActionLog, getRanking } from '../services/api';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(null);

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
      setAlert('Hubo un error al registrar tus datos. Por favor, inténtalo de nuevo.');
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
      
      handleLogout();
      
      return data;
    } catch (err) {
      setError(err);
      setAlert('Ocurrió un error al guardar tu puntuación.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleGetRanking = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getRanking();
      
      // Corregido: Verificamos si la respuesta es un array o si lo contiene en una propiedad
      if (Array.isArray(response)) {
        setRanking(response);
      } else if (response && Array.isArray(response.data)) {
        setRanking(response.data);
      } else {
        // En caso de que el formato no sea el esperado
        console.error("Los datos del ranking no son un array válido.");
        setRanking([]);
      }
    } catch (err) {
      setError(err);
      setAlert('No se pudo cargar el ranking.');
      setRanking([]); // Importante: Limpiar el ranking en caso de error
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
        alert,
        handleRegister,
        handleSaveLog,
        handleGetRanking,
        handleLogout,
        clearAlert,
        isAuthenticated: !!token
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};