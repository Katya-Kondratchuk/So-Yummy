import axios from 'axios';
import { AUTH_ENDPOINT } from './endpoint';

export const refreshTokens = async refreshToken => {
  try {
    const { data } = await axios.post(AUTH_ENDPOINT.REFRESH, {
      refreshToken,
    });
    return data;
  } catch (error) {
    return null;
  }
};
