import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { normalizeName } from 'services/normalized';
axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const AUTH_ENDPOINT = {
  REGISTER: '/auth/register',
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',
  USER: '/user',
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
      toast(`You successfully registered, ${normalizeName(data.username)}!`);
      ThunkAPI.dispatch(
        loginUser({ email: credentials.email, password: credentials.password }),
      );
      return data;
    } catch (error) {
      if (error.response.status === 409) {
        toast.error(`${error.response?.data?.message}!`);
      }

      if (error.response.status === 400) {
        toast.error('Failed to register, try again pls!');
      }

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
      toast.success(`Welcome, ${normalizeName(data.user.username)}!`);
      return data;
    } catch (error) {
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
    const { sid, refreshToken } = ThunkAPI.getState().auth;

    if (!refreshToken || !sid) {
      return ThunkAPI.rejectWithValue();
    }

    token.set(refreshToken);

    try {
      const { data } = await axios.post(AUTH_ENDPOINT.REFRESH, { sid });
      token.set(data.newAccessToken);
      ThunkAPI.dispatch(getUserInfo());
      return data;
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
      toast('You successfully logged out!');
      token.unset();
      return;
    } catch (error) {
      toast('You logged out, pls login again!');
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
