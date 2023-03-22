import axios from 'axios';
import { AUTH_ENDPOINT } from './endpoint';

export const refreshTokens = async refreshToken => {
  try {
    const { data } = await axios.post(AUTH_ENDPOINT.REFRESH, {
      refreshToken,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
