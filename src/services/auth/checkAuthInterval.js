import { clearTokens, updateTokens } from 'redux/auth/authSlice';
import { refreshTokens } from './refreshTokens';

export const startTokenRefreshInterval = (dispatch, refreshToken) => {
  const interval = setInterval(async () => {
    try {
      const data = await refreshTokens(refreshToken);
      if (!data) {
        dispatch(clearTokens());
        stopTokenRefreshInterval();
      }

      dispatch(updateTokens(data));
    } catch (error) {}
  }, 4.2 * 60 * 1000);
  localStorage.setItem('refreshTokenInterval', interval);
};

export const stopTokenRefreshInterval = () => {
  const interval = localStorage.getItem('refreshTokenInterval');
  if (!interval) return;
  clearInterval(interval);
  localStorage.removeItem('refreshTokenInterval');
};
