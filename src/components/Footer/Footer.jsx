import React from 'react';
import SocialLinks from 'reusableComponents/SocialLinks/SocialLinks';
import FooterNavigation from './FooterNavigation/FooterNavigation';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={`${css.footer} container`}>
        <FooterNavigation />
        <div className={css.SocialLinks}>
          <SocialLinks />
        </div>
      </div>
      <div className={`${css.downText} container`}>
        <span>© 2023 All Rights Reserved.</span>
        <span> Terms of Service</span>
      </div>
    </footer>
  );
};

export default Footer;
