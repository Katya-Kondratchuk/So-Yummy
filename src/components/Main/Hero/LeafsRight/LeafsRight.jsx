import React from 'react';
import { createPortal } from 'react-dom';
import css from './LeafsRight.module.css';
const heroRoot = document.querySelector('#hero-bg');

const LeafsRight = () => {
  return createPortal(<div className={css.container}></div>, heroRoot);
};

export default LeafsRight;
