import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use((config) => {
  const token = Cookies.get('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const message = error.response?.data?.message || 'Something went wrong';
    if (error.response?.status === 401) {
      Cookies.remove('auth_token');
      window.location.href = '/login';
    }
    return Promise.reject(new Error(message));
  }
);

export const auth = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    Cookies.set('auth_token', response.data.token);
    return response.data;
  },

  signup: async (data: any) => {
    const response = await api.post('/auth/signup', data);
    return response.data;
  },

  forgotPassword: async (email: string) => {
    const response = await api.post('/auth/forgot-password', { email });
    return response.data;
  },

  resetPassword: async (token: string, password: string) => {
    const response = await api.post('/auth/reset-password', { token, password });
    return response.data;
  },

  verifyEmail: async (token: string) => {
    const response = await api.post('/auth/verify-email', { token });
    return response.data;
  }
};

export const courses = {
  getAll: async () => {
    const response = await api.get('/courses');
    return response.data;
  },

  enroll: async (courseId: string) => {
    const response = await api.post(`/courses/${courseId}/enroll`);
    return response.data;
  }
};

export const chat = {
  sendMessage: async (message: string) => {
    const response = await api.post('/chat/messages', { message });
    return response.data;
  },

  getHistory: async () => {
    const response = await api.get('/chat/history');
    return response.data;
  }
};

export const newsletter = {
  subscribe: async (email: string) => {
    const response = await api.post('/newsletter/subscribe', { email });
    return response.data;
  }
};