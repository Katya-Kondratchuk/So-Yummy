import { createSlice } from '@reduxjs/toolkit';
import {
  getUserInfo,
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
  verificationUser,
} from './authOperation';

const initialState = {
  user: { name: '', email: '', avatarURL: '' },
  refreshToken: '',
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
        state.refreshToken = payload.newRefreshToken;
        state.sid = payload.sid;
        state.isRefreshUser = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.refreshToken = '';
        state.sid = '';
        state.error = payload;
        state.isRefreshUser = false;
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
        state.user.userData = payload.userData;
        state.user.id = payload.id;
        state.loadind = false;
      })
      .addCase(getUserInfo.rejected, handlerRejected);
  },
});
