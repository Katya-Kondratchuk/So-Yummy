import React from 'react';
import css from './UserAvatar.module.css';
const avatarURL =
  'https://www.gravatar.com/avatar/23e2c6efd1357d7f2289bf6d1a305665';

const UserAvatar = () => {
  return <img className={css.avatar} src={avatarURL} alt="User's avatar" />;
};

export default UserAvatar;
