import axios from 'axios';

const api = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3030',
});

export default api;
