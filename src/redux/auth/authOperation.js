import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { normalizeName } from 'services/normalized';
import { clearRefresh, reRefresh } from './authSlice';

axios.defaults.baseURL = 'https://so-yummy.onrender.com/api';

const AUTH_ENDPOINT = {
  REGISTER: '/users/signup',
  LOGIN: '/users/login',
  LOGOUT: '/users/logout',
  REFRESH: '/users/refresh',
  VERIFY: '/users/verify',
  VERIFY_RESEND: '/users/verify/resend-email',
  USER: '/users/current',
  SEND_EMAIL: `/users/reset/send-reset-link`,
};

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await axios.post(AUTH_ENDPOINT.REGISTER, credentials);
      toast.success(
        `You successfully registered, ${normalizeName(
          data.user.name,
        )}!Check email for verification!`,
      );
      return data.user;
    } catch (error) {
      if (error.response.status === 409 || error.response.status === 400) {
        toast.error(`${error.response?.data?.message}!`);
      }
      // if (error.response.status === 409  ) {
      //   toast.error(`${error.response?.data?.message}!`);
      // }

      // if (error.response.status === 400) {
      //   toast.error('Failed to register, try again pls!');
      // }

      return ThunkAPI.rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await axios.post(AUTH_ENDPOINT.LOGIN, credentials);
      token.set(data.accessToken);
      toast.success(`Welcome, ${normalizeName(data.user.name)}!`);
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error(
          `${error.response?.data?.message ?? 'Email is not verified'}!`,
        );
      }

      if (error.response.status === 403) {
        toast.error(
          `${
            error.response?.data?.message ??
            'Wrong password or login, try again pls!'
          }!`,
        );
      }

      if (error.response.status === 400) {
        toast.error(
          `${
            error.response?.data?.message ?? 'Failed to login, try again pls!'
          }!`,
        );
      }
      return ThunkAPI.rejectWithValue(error.message);
    }
  },
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, ThunkAPI) => {
    const { refreshToken } = ThunkAPI.getState().auth;

    if (!refreshToken) {
      return ThunkAPI.rejectWithValue();
    }

    try {
      const { data } = await axios.post(AUTH_ENDPOINT.REFRESH, {
        refreshToken,
      });
      token.set(data.accessToken);
      ThunkAPI.dispatch(getUserInfo());
      return data.refreshToken;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, ThunkAPI) => {
    try {
      await axios.post(AUTH_ENDPOINT.LOGOUT);
      toast.success('You successfully logged out!');
      token.unset();
      return;
    } catch (error) {
      toast.warn('You logged out, please login again!');
      return ThunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getUserInfo = createAsyncThunk(
  'auth/getUserInfo',
  async (_, ThunkAPI) => {
    try {
      const { data } = await axios.get(AUTH_ENDPOINT.USER);
      return data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  },
);

export const verificationUser = createAsyncThunk(
  'auth/verificationUser',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await axios.get(
        `${AUTH_ENDPOINT.VERIFY}/${credentials}`,
      );
      toast.success(`${data.message}!`);
      return data;
    } catch (error) {
      if (error.response.status === 404) {
        toast.error(`${error.response?.data?.message}!`);
      }

      return ThunkAPI.rejectWithValue(error.message);
    }
  },
);

export const verifyResendEmail = createAsyncThunk(
  'auth/verifyResendEmail',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await axios.post(
        AUTH_ENDPOINT.VERIFY_RESEND,
        credentials,
      );
      toast.success(`${data.message}!`);
      return data;
    } catch (error) {
      toast.error(`${error.response?.data?.message || 'Try again'}!`);
      return ThunkAPI.rejectWithValue(error.message);
    }
  },
);

export const setupInterceptors = store => {
  const { dispatch } = store;
  axios.interceptors.response.use(
    response => response,
    async e => {
      const originalConfig = e.config;
      if (originalConfig.url !== '/auth/signin' && e.response) {
        if (
          originalConfig.url === '/users/refresh' &&
          e.response.status === 403
        ) {
          try {
            await dispatch(clearRefresh());
          } catch (_err) {
            return Promise.reject(_err);
          }
        }

        if (e.response.status === 401 && !originalConfig._retry) {
          originalConfig._retry = true;
          try {
            const { refreshToken } = store.getState().auth;

            if (!refreshToken) {
              return Promise.reject(e);
            }

            const { data } = await axios.post(AUTH_ENDPOINT.REFRESH, {
              refreshToken,
            });

            await dispatch(reRefresh(data.refreshToken));

            token.set(data.accessToken);
            e.config.headers['Authorization'] = 'Bearer ' + data.accessToken;
            return axios(e.config);
          } catch (error) {
            return Promise.reject(error);
          }
        }
      }

      return Promise.reject(e);
    },
  );
};
export const postResendLink = createAsyncThunk(
  'auth/postResendLink',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await axios.post(AUTH_ENDPOINT.SEND_EMAIL, credentials);
      toast.success(`${data.message}!`);
      return credentials.email;
    } catch (error) {
      toast.error(`${error.response?.data?.message || 'Try again'}!`);
      return ThunkAPI.rejectWithValue(error.message);
    }
  },
);
