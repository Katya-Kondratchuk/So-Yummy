import { createSlice } from '@reduxjs/toolkit';
import {
  getUserInfo,
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
  verificationUser,
  verifyResendEmail,
  postResendLink,
} from './authOperation';

const initialState = {
  user: { name: '', email: '', avatarURL: '' },
  refreshToken: '',
  resetEmail: '',
  loadind: false,
  isLoggedIn: false,
  isRefreshUser: false,
  error: null,
};

const handlerPending = state => {
  state.error = null;
  state.loadind = true;
};

const handlerRejected = (state, { payload }) => {
  state.error = payload;
  state.loadind = false;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reRefresh(state, { payload }) {
      state.refreshToken = payload;
    },
    clearRefresh(state, { _ }) {
      state.isLoggedIn = false;
      state.refreshToken = '';
    },
    updateUserName(state, { payload }) {
      state.user.name = payload;
    },
    updateUserAvatar(state, { payload }) {
      state.user.avatarURL = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, handlerPending)
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.avatarURL = payload.avatarURL;
        state.loadind = false;
      })
      .addCase(registerUser.rejected, handlerRejected)

      .addCase(verificationUser.pending, handlerPending)
      .addCase(verificationUser.fulfilled, (state, _) => {
        state.loadind = false;
      })
      .addCase(verificationUser.rejected, handlerRejected)

      .addCase(verifyResendEmail.pending, handlerPending)
      .addCase(verifyResendEmail.fulfilled, (state, _) => {
        state.loadind = false;
      })
      .addCase(verifyResendEmail.rejected, handlerRejected)

      .addCase(loginUser.pending, handlerPending)
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.user.avatarURL = payload.user.avatarURL;
        state.refreshToken = payload.refreshToken;
        state.loadind = false;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, handlerRejected)

      .addCase(refreshUser.pending, (state, _) => {
        state.error = null;
        state.isRefreshUser = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.isRefreshUser = false;
        state.refreshToken = payload;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.refreshToken = '';
        state.isRefreshUser = false;
        state.error = payload;
      })

      .addCase(logoutUser.pending, handlerPending)
      .addCase(logoutUser.fulfilled, (state, _) => {
        state.user.email = '';
        state.user.name = '';
        state.user.avatarURL = '';
        state.refreshToken = '';
        state.loadind = false;
        state.isLoggedIn = false;
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.user.email = '';
        state.user.name = '';
        state.user.avatarURL = '';
        state.refreshToken = '';
        state.loadind = false;
        state.isLoggedIn = false;
        state.error = payload;
      })

      .addCase(getUserInfo.pending, handlerPending)
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.name = payload.name;
        state.user.avatarURL = payload.avatarURL;
        state.loadind = false;
      })
      .addCase(getUserInfo.rejected, handlerRejected)

      .addCase(postResendLink.pending, handlerPending)
      .addCase(postResendLink.fulfilled, (state, { payload }) => {
        state.resetEmail = payload;
      })
      .addCase(postResendLink.rejected, handlerRejected);
  },
});

export const { reRefresh, clearRefresh, updateUserName, updateUserAvatar } =
  authSlice.actions;
