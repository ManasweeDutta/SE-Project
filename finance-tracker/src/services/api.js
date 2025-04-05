import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // replace with your backend URL

export const getTransactions = () => axios.get(`${API_BASE_URL}/transactions`);

export const addTransaction = (data) =>
  axios.post(`${API_BASE_URL}/transactions`, data);

export const getInvoices = () => axios.get(`${API_BASE_URL}/invoices`);

export const createInvoice = (data) =>
  axios.post(`${API_BASE_URL}/invoices`, data);
