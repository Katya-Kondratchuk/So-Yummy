import React from 'react';
import s from './TitleRecip.module.css';

const TitleRecip = ({ text }) => {
  return <h2 className={s.TitleRecip}>{text}</h2>;
};

export default TitleRecip;
