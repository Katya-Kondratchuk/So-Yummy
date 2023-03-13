import React from 'react';
import css from './UserName.module.css';
const userName = 'Kondratchuk';

const UserName = () => {
  return <div className={css.name}>{userName}</div>;
};

export default UserName;
