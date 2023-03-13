import React from 'react';
import s from './TextFooter.module.css';

const TextFooter = () => {
  return (
    <div>
      <div className={s.logoText}>
        <img src="/public/logo192.png" alt="So Yummy" />
        <span>So Yummy</span>
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
