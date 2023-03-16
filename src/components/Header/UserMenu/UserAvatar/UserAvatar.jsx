import React from 'react';
import css from './UserAvatar.module.css';
const avatarURL =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStuBtmwhb00WEzU_1MstjzeLHyM7xsWnjdtg&usqp=CAU';

const UserAvatar = () => {
  return <img className={css.avatar} src={avatarURL} alt="User's avatar" />;
};

export default UserAvatar;
