<<<<<<< HEAD
// import axios from 'axios';

// // Create an Axios instance
// const api = axios.create({
//   baseURL: 'https://bellavire-backend.onrender.com/api/v1',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Optional: Add token to every request if available in localStorage
// api.interceptors.request.use((config) => {
//   const token = JSON.parse(localStorage.getItem('auth-storage') || '{}')?.state?.token;
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export default api;


import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'https://bellavire-backend.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
=======
import axios, { AxiosRequestConfig } from "axios";

let BASE_URL = "https://bellavire-backend.onrender.com/api/v1";

// Conditionally override BASE_URL if running in development
if (typeof process !== "undefined" && process.env.NODE_ENV === "development") {
  // Use the environment variable if available, otherwise fallback
  BASE_URL = process.env.REACT_APP_API_BASE_URL || BASE_URL;
}

// Create an Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
>>>>>>> upstream/dev
  },
});

// Add token from localStorage if available before each request
<<<<<<< HEAD
api.interceptors.request.use((config) => {
  try {
    const stored = localStorage.getItem('auth-storage');
    if (stored) {
      const parsed = JSON.parse(stored);
      const token = parsed?.state?.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
  } catch (error) {
    // Fail silently if parsing fails
    console.error('Failed to parse auth-storage from localStorage', error);
  }
  return config;
});
=======
api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    try {
      const stored = localStorage.getItem("auth-storage");
      if (stored) {
        const parsed = JSON.parse(stored);
        const token = parsed?.state?.token;
        if (token) {
          if (!config.headers) {
            config.headers = {};
          }
          if (typeof (config.headers as any).set === "function") {
            (config.headers as any).set("Authorization", `Bearer ${token}`);
          } else {
            (config.headers as any)["Authorization"] = `Bearer ${token}`;
          }
        }
      }
    } catch (error) {
      console.error("Failed to parse auth-storage from localStorage", error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);
>>>>>>> upstream/dev

export default api;
