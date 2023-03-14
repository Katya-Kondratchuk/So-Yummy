import React from 'react';
import { createPortal } from 'react-dom';
import css from './LeafsLeft.module.css';
const heroRoot = document.querySelector('#hero-bg');

const LeafsLeft = () => {
  return createPortal(<div className={css.container}></div>, heroRoot);
};

export default LeafsLeft;
