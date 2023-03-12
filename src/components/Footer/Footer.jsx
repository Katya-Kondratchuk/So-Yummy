import React from 'react';
import SocialLinks from 'reusableComponents/SocialLinks/SocialLinks';
import FooterNavigation from './FooterNavigation/FooterNavigation';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <>
      <div className={`${s.footer} container`}>
        <FooterNavigation />
        <div className={s.SocialLinks}>
          <SocialLinks />
        </div>
      </div>
      <div className={`${s.downText} container`}>
        <span>© 2023 All Rights Reserved.</span>
        <span> Terms of Service</span>
      </div>
    </>
  );
};

export default Footer;
