import axios from 'axios';

const API_BASE_URL = 'https://trivia.interactiva.net.co/api';

// 1. Servicio para registrar un nuevo usuario
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user-register/`, userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error al registrar el usuario:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// 2. Servicio para guardar la puntuación y acciones del usuario
export const saveUserActionLog = async (actionData, token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user-action-log/`, actionData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error al guardar el log de acciones:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// 3. Servicio para obtener el ranking de usuarios
export const getRanking = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/ranking/`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener el ranking:', error.response ? error.response.data : error.message);
    throw error;
  }
};