export const setAuthData = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getAuthData = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const clearAuthData = () => {
  localStorage.removeItem('user');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('user');
};
