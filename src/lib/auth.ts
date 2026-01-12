const ADMIN_TOKEN_KEY = 'admin_token';
const ADMIN_USERNAME_KEY = 'admin_username';

export const adminAuth = {
  isAuthenticated: (): boolean => {
    return !!localStorage.getItem(ADMIN_TOKEN_KEY);
  },

  getUsername: (): string | null => {
    return localStorage.getItem(ADMIN_USERNAME_KEY);
  },

  login: (username: string): void => {
    localStorage.setItem(ADMIN_TOKEN_KEY, 'true');
    localStorage.setItem(ADMIN_USERNAME_KEY, username);
  },

  logout: (): void => {
    localStorage.removeItem(ADMIN_TOKEN_KEY);
    localStorage.removeItem(ADMIN_USERNAME_KEY);
  }
};
