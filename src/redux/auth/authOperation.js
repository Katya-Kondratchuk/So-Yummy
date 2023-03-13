import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import instanceAxios from 'redux/instanceAxios';
import { normalizeName } from 'services/normalized';

const AUTH_ENDPOINT = {
  REGISTER: '/users/signup',
  LOGIN: '/users/login',
  LOGOUT: '/users/logout',
  REFRESH: '/users/refresh',
  VERIFY: '/users/verify',
  VERIFY_RESEND: '/users/verify/resend-email',
  USER: '/users/current',
};

const token = {
  set(token) {
    instanceAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instanceAxios.defaults.headers.common.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await instanceAxios.post(
        AUTH_ENDPOINT.REGISTER,
        credentials,
      );
      toast(
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
      const { data } = await instanceAxios.post(
        AUTH_ENDPOINT.LOGIN,
        credentials,
      );
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
      const { data } = await instanceAxios.post(AUTH_ENDPOINT.REFRESH, {
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
      await instanceAxios.post(AUTH_ENDPOINT.LOGOUT);
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
      const { data } = await instanceAxios.get(AUTH_ENDPOINT.USER);
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
      const { data } = await instanceAxios.get(
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

export const verifyResendEmail = createAsyncThunk(
  'auth/verifyResendEmail',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await instanceAxios.post(
        AUTH_ENDPOINT.VERIFY_RESEND,
        credentials,
      );
      toast(`${data.message}!`);
      return data;
    } catch (error) {
      toast.error(`${error.response?.data?.message || 'Try again'}!`);
      return ThunkAPI.rejectWithValue(error.message);
    }
  },
);
