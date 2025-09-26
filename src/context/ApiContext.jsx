import { createContext, useState } from 'react';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setApiData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApiContext.Provider value={{ apiData, loading, error, fetchData }}>
      {children}
    </ApiContext.Provider>
  );
};