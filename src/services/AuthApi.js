import { getUser, clearSession } from './authStorage';

export const AuthApi = {
  login: async (credentials) => {
    return Promise.resolve({
      success: true,
      data: getUser(),
      token: 'mock-jwt-token-demo',
    });
  },
  logout: async () => {
    clearSession();
    return Promise.resolve({ success: true });
  },
  getCurrentUser: async () => {
    return Promise.resolve({
      success: true,
      data: getUser(),
    });
  },
};

export default AuthApi;
