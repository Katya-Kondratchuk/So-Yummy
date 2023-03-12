import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import css from './SuperBtn.module.css';

const SuperBtn = ({ typeBtn, lnk, to, otln, otlnInv, title, dark }) => {
  if (lnk) {
    return (
      <Link
        className={clsx(css.common, {
          [css.lnk]: lnk,
          [css.outlined]: otln,
          [css.outlinedInverted]: otlnInv,
          [css.dark]: dark,
        })}
        to={to}
      >
        {title}
      </Link>
    );
  } else {
    return (
      <button
        className={clsx(css.common, css.btn, {
          [css.outlined]: otln,
          [css.outlinedInverted]: otlnInv,
          [css.dark]: dark,
        })}
        type={typeBtn}
      >
        {title}
      </button>
    );
  }
};

export default SuperBtn;

// Example of usage

// Green button
// <div style={{width: '100px', height: '50px'}}>
//  <SuperBtn title="Search" typeBtn="submit"/>
// </div>

// Green link
// <div style={{width: '100px', height: '50px'}}>
//  <SuperBtn title="Home" lnk to="/home"/>
// </div>

// Dark button
// <div style={{width: '100px', height: '50px'}}>
//  <SuperBtn title="Search" dark typeBtn="submit"/>
// </div>

// Green link
// <div style={{width: '100px', height: '50px'}}>
//  <SuperBtn title="Home" dark lnk to="/home"/>
// </div>

// Outlined button
// <div style={{width: '100px', height: '50px'}}>
//  <SuperBtn title="Search" otln typeBtn="submit"/>
// </div>

// Outlined inverted button
// <div style={{width: '100px', height: '50px'}}>
//  <SuperBtn title="Search" otlnInv typeBtn="submit"/>
// </div>