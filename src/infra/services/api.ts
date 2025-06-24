import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:8004/',  // URL base da API
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    // Pode adicionar token aqui se precisar
    return config;
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.log('Erro da API:', error.response.data);
    } else {
      console.log('Erro de rede:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;  // <-- exporte a instância aqui!
