import React from 'react';
import s from './Time.module.css';

const Time = ({ text }) => {
  return <p className={s.Time}>{text}</p>;
};

export default Time;
