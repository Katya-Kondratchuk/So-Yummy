import React from 'react';
import s from './FooterNavigation.module.css';
import Nav from './Nav/Nav';
import SubscribeForm from './SubscribeForm/SubscribeForm';
import TextFooter from './TextFooter/TextFooter';

const FooterNavigation = () => {
  return (
    <div className={s.footerNavigation}>
      <TextFooter />
      <Nav />
      <SubscribeForm />
    </div>
  );
};

export default FooterNavigation;
