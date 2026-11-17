import defaultUser from '../data/currentUser.json';

const USER_KEY = 'unominda_user';
const TOKEN_KEY = 'unominda_token';

export const getUser = () => {
  try {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) {
      localStorage.setItem(USER_KEY, JSON.stringify(defaultUser));
      return defaultUser;
    }
    return JSON.parse(raw);
  } catch (e) {
    return defaultUser;
  }
};

export const setUser = (user) => {
  try {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    window.dispatchEvent(new Event('storage'));
  } catch (e) {
    console.error('Failed to set user in localStorage', e);
  }
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY) || 'mock-demo-token-12345';
};

export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const clearSession = () => {
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(TOKEN_KEY);
};

export default {
  getUser,
  setUser,
  getToken,
  setToken,
  clearSession,
};
