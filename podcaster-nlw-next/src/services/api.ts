import axios from 'axios';

export const api = axios.create({
  baseUrl: 'ttp://localhost:3333/',
});
