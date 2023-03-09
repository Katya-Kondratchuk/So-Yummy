/* Компонент приймає пропс light, dark або green, 
в залежності від того, на якому фоні рендериться компонент*/

import React from 'react';
import s from './SocialLinks.module.css';

import { ReactComponent as Facebook } from './images/Facebook.svg';
import { ReactComponent as Youtube } from './images/Youtube.svg';
import { ReactComponent as Twitter } from './images/Twitter.svg';
import { ReactComponent as Instagram } from './images/Instagram.svg';

const SocialLinks = ({ text }) => {
  console.log(`s.${text}`);
  return (
    <div className="wrapper">
      <Facebook className={s[text]} width="26" height="26" />
      <Youtube className={s[text]} width="20" height="15" />
      <Twitter className={s[text]} width="20" height="16" />
      <Instagram className={s[text]} width="20" height="20" />
    </div>
  );
};

export default SocialLinks;
