import axios from 'axios';
import { clearTokens, updateTokens } from 'redux/auth/authSlice';
import { persistor } from 'redux/store';
import { refreshTokens } from './refreshTokens';

let isRefreshing = false;
let failedRequests = [];

function updateLocalStorage() {
  persistor.flush().then(() => {});
}

export const setupInterceptors = s => {
  axios.interceptors.request.use(
    config => {
      const token = s.getState().auth.accessToken;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    error => Promise.reject(error),
  );

  axios.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          try {
            const accessToken = await new Promise((resolve, reject) => {
              failedRequests.push({ resolve, reject });
            });
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return axios(originalRequest);
          } catch (error) {
            return Promise.reject(error);
          }
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const refreshToken = s.getState().auth.refreshToken;

          const data = await refreshTokens(refreshToken);

          s.dispatch(updateTokens(data));

          updateLocalStorage();

          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

          const result = await axios(originalRequest);

          for (const request of failedRequests) {
            request.resolve(data.accessToken);
          }
          failedRequests = [];

          return result;
        } catch (err) {
          failedRequests = [];
          s.dispatch(clearTokens());
          return Promise.reject(err);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    },
  );
};
