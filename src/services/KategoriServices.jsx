import axios from "axios";

const BASE_URL = "http://103.247.10.59:3000/api";
const API_URL = `${BASE_URL}/categories`;

// Helper untuk mengambil token yang dinamis dari localStorage
const getAuthHeaders = () => {
  const token = localStorage.getItem("token"); // Ambil murni berdasarkan key "token"
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
};

// 1. Auth Service
export const loginUser = (email, password) => {
  return axios.post(`${BASE_URL}/auth/login`, { email, password });
};

// 2. Category Services (Semua menggunakan getAuthHeaders agar aman)
export const getAllCategories = () => {
  return axios.get(API_URL, getAuthHeaders());
};

export const getCategoriesById = (id) => {
  return axios.get(`${API_URL}/${id}`, getAuthHeaders());
};

export const addCategory = (data) => {
  return axios.post(API_URL, data, getAuthHeaders());
};

// Perbaikan di sini: Gunakan getAuthHeaders() agar createCategories juga membawa token dengan benar
export const createCategories = (data) => {
    return axios.post(API_URL, data, getAuthHeaders());
};

export const updateCategories = (id, data) => {
  return axios.put(`${API_URL}/${id}`, data, getAuthHeaders());
};

export const deleteCategories = (id) => {
  return axios.delete(`${API_URL}/${id}`, getAuthHeaders());
};