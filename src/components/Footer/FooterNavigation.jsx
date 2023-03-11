import React from 'react';
import Nav from './FooterNavigation';
import SubscribeForm from './FooterNavigation/SubscribeForm';
import s from './Footer.module.css';

const FooterNavigation = () => {
  return (
    <div className="FooterNavigation">
      <div className={s.logoText}>
        {/* <img src="/public/logo192.png" alt="So Yummy" /> */}
        <span>So Yummy</span>
      </div>
      <ul className={s.navLeft}>
        <li>Database of recipes that can be replenished </li>
        <li>Flexible search for desired and unwanted ingredients</li>
        <li>Ability to add your own recipes with photos</li>
        <li>Convenient and easy to use</li>
      </ul>
      <Nav className="FooterNavigation" />
      <SubscribeForm />
    </div>
  );
};

export default FooterNavigation;
