// frontend/src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Ensure this URL matches your backend server URL
});

export default api;
