/* Компонент приймає пропс light або dark для рендерингу  на світлому або темному (футер) фоні*/

import React from 'react';
import './SocialLinks.css';
import { ReactComponent as Facebook } from './images/Facebook.svg';
import { ReactComponent as Youtube } from './images/Youtube.svg';
import { ReactComponent as Twitter } from './images/Twitter.svg';
import { ReactComponent as Instagram } from './images/Instagram.svg';

const SocialLinks = text => {
  return (
    <div className="wrapper">
      <Facebook className={text.text} width="26" height="26" />
      <Youtube className={text.text} width="20" height="15" />
      <Twitter className={text.text} width="20" height="16" />
      <Instagram className={text.text} width="20" height="20" />
    </div>
  );
};

export default SocialLinks;
