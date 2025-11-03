import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const api = axios.create({
  baseURL: API_BASE_URL,
});

export const signupUser = (userData) => {
  return api.post('/auth/signup', userData);
};

export const loginUser = (credentials) => {
  return api.post('/auth/login', credentials);
};

export const createDonation = (donationData) => {
  return api.post('/donations', donationData);
};

export const getDonations = () => {
  return api.get('/donations');
};

export const createRequest = (requestData) => {
  return api.post('/requests', requestData);
};

export const getDashboardStats = () => {
  return api.get('/admin/stats');
};

export const getRequests = () => {
  return api.get('/requests');
};

