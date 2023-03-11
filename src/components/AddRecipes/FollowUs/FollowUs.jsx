import React from 'react';
import SocialLinks from 'reusableComponents/SocialLinks/SocialLinks';
import s from './FollowUs.module.css';

const FollowUs = props => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Follow us</h3>
      <SocialLinks />
    </div>
  );
};

FollowUs.propTypes = {};

export default FollowUs;
