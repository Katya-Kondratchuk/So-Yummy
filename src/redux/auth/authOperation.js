import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  startTokenRefreshInterval,
  stopTokenRefreshInterval,
} from 'services/auth/checkAuthInterval';
import { AUTH_ENDPOINT } from 'services/auth/endpoint';
import { normalizeName } from 'services/normalized';

axios.defaults.baseURL = 'https://so-yummy.onrender.com/api';

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
      return ThunkAPI.rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await axios.post(AUTH_ENDPOINT.LOGIN, credentials);
      startTokenRefreshInterval(ThunkAPI.dispatch, data.refreshToken);
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

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, ThunkAPI) => {
    try {
      await axios.post(AUTH_ENDPOINT.LOGOUT);
      stopTokenRefreshInterval();
      toast.success('You successfully logged out!');
      return;
    } catch (error) {
      stopTokenRefreshInterval();
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
