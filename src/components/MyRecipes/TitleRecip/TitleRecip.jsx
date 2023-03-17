import React from 'react';
import css from './TitleRecip.module.css';

const TitleRecip = ({ text }) => {
  return <h2 className={css.TitleRecip}>{text}</h2>;
};

export default TitleRecip;
