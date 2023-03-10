export const selectAuthUserName = state => state.auth.user.user;
export const selectAuthUserEmail = state => state.auth.user.email;
export const selectAuthUserAvatarURL = state => state.auth.user.avatarURL;
export const selectAuthRefreshToken = state => state.auth.refreshToken;
export const selectAuthLoading = state => state.auth.loadind;
export const selectAuthIsLoggedIn = state => state.auth.isLoggedIn;
export const selectAuthIsRefreshUser = state => state.auth.isRefreshUser;
export const selectAuthErrorMessage = state => state.auth.error;
