import React from 'react';
import { Nav } from './FooterNavigation';
import styles from './Footer.module.css';
import FormInput from 'reusableComponents/FormInput/FormInput';
import Button from 'reusableComponents/Button/Button';
import SocialLinks from 'reusableComponents/SocialLinks/SocialLinks';

const Footer = () => {
  return (
    <div>
      <div className={`${styles.footer} container`}>
        <div>
          <div className={styles.logoText}>
            <img src="/public/logo192.png" alt="So Yummy" />
            <span>So Yummy</span>
          </div>
          <ul className={styles.navLeft}>
            <li>Database of recipes that can be replenished </li>
            <li>Flexible search for desired and unwanted ingredients</li>
            <li>Ability to add your own recipes with photos</li>
            <li>Convenient and easy to use</li>
          </ul>
        </div>
        <Nav className={styles.navCentre} />
        <div className={styles.navRight}>
          <p>Subscribe to our Newsletter</p>
          <p>
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </p>
          <div style={{ width: '339px', height: '59px' }}>
            {/* <FormInput/> */}
          </div>
          <Button className="button" label="Subcribe" />
        </div>
      </div>
      <SocialLinks dark />
    </div>
  );
};

export default Footer;
