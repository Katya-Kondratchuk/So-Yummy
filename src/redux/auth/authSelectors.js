export const selectAuthIsLoadCurrentUser = state =>
  state.auth.isLoadCurrentUser;
export const selectAuthUserName = state => state.auth.user.username;
export const selectAuthIsLoggedIn = state => state.auth.isLoggedIn;
export const selectAuthRefreshToken = state => state.auth.refreshToken;
export const selectAuthUserId = state => state.auth.user.id;
export const selectAuthLoading = state => state.auth.loadind;
export const selectAuthUserData = state => state.auth.user.userData;
