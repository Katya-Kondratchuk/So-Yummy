import React from 'react';
import css from './FooterNavigation.module.css';
import Nav from './Nav/Nav';
import SubscribeForm from './SubscribeForm/SubscribeForm';
import TextFooter from './TextFooter/TextFooter';

const FooterNavigation = () => {
  return (
    <div className={css.footerNavigation}>
      <TextFooter />
      <Nav />
      <SubscribeForm />
    </div>
  );
};

export default FooterNavigation;
