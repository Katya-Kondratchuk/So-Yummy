import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthUserName } from 'redux/auth/authSelectors';
import css from './UserName.module.css';

const UserName = () => {
  const userName = useSelector(selectAuthUserName);
  return <div className={css.name}>{userName}</div>;
};

export default UserName;
