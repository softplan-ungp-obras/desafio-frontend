import axios from 'axios';

import { toast } from 'react-toastify';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: 'json',
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      toast.error('Erro: ', error.response);
    }
  }
);

export default api;
