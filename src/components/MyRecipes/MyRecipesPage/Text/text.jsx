import React from 'react';
import s from './text.module.css';

const Textt = ({ text }) => {
  return <p className={s.text}>{text}</p>;
};

export default Textt;