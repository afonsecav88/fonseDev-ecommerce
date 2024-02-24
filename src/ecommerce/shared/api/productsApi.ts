import axios from 'axios';

export const productsApi = axios.create({
  baseURL: `https://fakestoreapi.com`,
  headers: { 'content-type': 'application/json; charset=utf-8' },
});
