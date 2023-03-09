import React from 'react';
import s from './Title.module.css';

const Title = ({ text }) => {
  return <h1 className={s.title}>{text}</h1>;
};

export default Title;
