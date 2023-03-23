import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { loginWithGoogle } from 'redux/auth/authOperation';

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const { googleAuthToken } = useParams();
  dispatch(loginWithGoogle(googleAuthToken));
  return <div>Login User with Google</div>;
};

export default GoogleAuth;
