import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthUserAvatarURL } from 'redux/auth/authSelectors';
import css from './UserAvatar.module.css';

const UserAvatar = () => {
  const avatarURL = useSelector(selectAuthUserAvatarURL);
  return <img className={css.avatar} src={avatarURL} alt="User's avatar" />;
};

export default UserAvatar;
