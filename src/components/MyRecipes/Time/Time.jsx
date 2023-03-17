import React from 'react';
import css from './Time.module.css';

const Time = ({ text }) => {
  return <p className={css.Time}>{text}</p>;
};

export default Time;
