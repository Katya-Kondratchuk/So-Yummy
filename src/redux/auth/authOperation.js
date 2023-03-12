import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { normalizeName } from 'services/normalized';

axios.defaults.baseURL = 'https://so-yammy-backend.onrender.com/api';

const AUTH_ENDPOINT = {
  REGISTER: '/users/signup',
  LOGIN: '/users/login',
  LOGOUT: '/users/logout',
  REFRESH: '/users/refresh',
  VERIFY: '/users/verify',
  VERIFY_RESEND: '/users/verify/resend-email',
  USER: '/current',
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
      toast(
        `You successfully registered, ${normalizeName(
          data.user.name,
        )}!Check email for verification!`,
      );
      return data.user;
    } catch (error) {
      console.log('🚀 ~ error:', error);
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
      console.log(axios.defaults.headers.common.Authorization);
      await axios.post(AUTH_ENDPOINT.LOGOUT);
      toast('You successfully logged out!');
      token.unset();
      return;
    } catch (error) {
      toast('You logged out, please login again!');
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
      toast(`${data.message}!`);
      return data;
    } catch (error) {
      if (error.response.status === 404) {
        toast.error(`${error.response?.data?.message}!`);
      }

      return ThunkAPI.rejectWithValue(error.message);
    }
  },
);
