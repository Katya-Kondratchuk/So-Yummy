import { createSlice } from '@reduxjs/toolkit';
import {
  getUserInfo,
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
} from './authOperation';

const initialState = {
  user: { userData: null, username: '', email: '', id: '' },
  sid: '',
  refreshToken: '',
  loadind: false,
  isLoggedIn: false,
  isLoadCurrentUser: false,
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
        state.user.username = payload.username;
        state.user.email = payload.email;
        state.user.id = payload.id;
        state.loadind = false;
        // console.log({ ...state });
      })
      .addCase(registerUser.rejected, handlerRejected)

      .addCase(loginUser.pending, handlerPending)
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.refreshToken = payload.refreshToken;
        state.sid = payload.sid;
        state.user.email = payload.user.email;
        state.user.username = payload.user.username;
        state.user.userData = payload.user.userData;
        state.user.id = payload.user.id;
        state.loadind = false;
      })
      .addCase(loginUser.rejected, handlerRejected)

      .addCase(refreshUser.pending, (state, _) => {
        state.error = null;
        state.isLoadCurrentUser = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.refreshToken = payload.newRefreshToken;
        state.sid = payload.sid;
        state.isLoadCurrentUser = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.refreshToken = '';
        state.sid = '';
        state.error = payload;
        state.isLoadCurrentUser = false;
      })

      .addCase(logoutUser.pending, handlerPending)
      .addCase(logoutUser.fulfilled, (state, _) => {
        state.refreshToken = '';
        state.sid = '';
        state.user.email = '';
        state.user.username = '';
        state.user.userData = null;
        state.user.id = '';
        state.isLoggedIn = false;
        state.loadind = false;
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.refreshToken = '';
        state.sid = '';
        state.user.email = '';
        state.user.username = '';
        state.user.userData = null;
        state.user.id = '';
        state.isLoggedIn = false;
        state.error = payload;
        state.loadind = false;
      })

      .addCase(getUserInfo.pending, handlerPending)
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.user.email = payload.email;
        state.user.username = payload.username;
        state.user.userData = payload.userData;
        state.user.id = payload.id;
        state.loadind = false;
      })
      .addCase(getUserInfo.rejected, handlerRejected);
  },
});
