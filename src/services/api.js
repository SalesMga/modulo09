import axios from 'axios';

const api = axios.create({baseURL: 'http://localhost:1299',});

export default api;
