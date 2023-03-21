import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'reusableComponents/Logo/Logo';
import css from './TextFooter.module.css';

const TextFooter = () => {
  return (
    <div>
      <div className={css.logoText}>
        <NavLink to="/main">
          <Logo inv width={'44px'} height={'44px'} />
        </NavLink>
        <span>So Yummy</span>
      </div>
      <ul className={css.navLeft}>
        <li>Database of recipes that can be replenished </li>
        <li>Flexible search for desired and unwanted ingredients</li>
        <li>Ability to add your own recipes with photos</li>
        <li>Convenient and easy to use</li>
      </ul>
    </div>
  );
};

export default TextFooter;
