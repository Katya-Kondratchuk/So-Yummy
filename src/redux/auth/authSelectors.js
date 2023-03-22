export const selectAuthUserName = state => state.auth.user.name;
export const selectAuthUserEmail = state => state.auth.user.email;
export const selectAuthUserAvatarURL = state => state.auth.user.avatarURL;
export const selectAuthRefreshToken = state => state.auth.refreshToken;
export const selectAuthLoading = state => state.auth.loadind;
export const selectAuthErrorMessage = state => state.auth.error;
export const selectAuthResetEmail = state => state.auth.resetEmail;
