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
  },
});

// Add token from localStorage if available before each request
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

export default api;
