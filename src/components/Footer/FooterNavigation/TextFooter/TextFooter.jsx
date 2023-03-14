import React from 'react';
import Logo from 'reusableComponents/Logo/Logo';
import s from './TextFooter.module.css';

const TextFooter = () => {
  return (
    <div>
      <div className={s.logoText}>
        <Logo inv width={'44px'} height={'44px'} /> <span>So Yummy</span>
      </div>
      <ul className={s.navLeft}>
        <li>Database of recipes that can be replenished </li>
        <li>Flexible search for desired and unwanted ingredients</li>
        <li>Ability to add your own recipes with photos</li>
        <li>Convenient and easy to use</li>
      </ul>
    </div>
  );
};

export default TextFooter;
