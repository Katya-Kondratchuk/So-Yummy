/* Компонент приймає пропс light, dark або green, 
в залежності від того, на якому фоні рендериться компонент*/

import React from 'react';
import css from './SocialLinks.module.css';

import { ReactComponent as Facebook } from './images/Facebook.svg';
import { ReactComponent as Youtube } from './images/Youtube.svg';
import { ReactComponent as Twitter } from './images/Twitter.svg';
import { ReactComponent as Instagram } from './images/Instagram.svg';
import clsx from 'clsx';

const SocialLinks = ({ text }) => {
  console.log(`s.${text}`);
  return (
    <div className={css.wrapper}>
      <a href="https://www.facebook.com/">
        <Facebook className={css[text]} width="20" height="20" />
      </a>
      <a href="https://www.youtube.com/">
        <Youtube className={css[text]} width="20" height="15" />
      </a>
      <a href="https://www.twitter.com/">
        <Twitter className={css[text]} width="20" height="16" />
      </a>
      <a href="https://www.instagram.com/">
        <Instagram className={clsx(css[text], css.instagramm)} />
      </a>
    </div>
  );
};

export default SocialLinks;
