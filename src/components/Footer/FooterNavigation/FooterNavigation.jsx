import React from 'react';
import { Nav, SubscribeForm } from '.';
import TextFooter from '../TextFooter/TextFooter';
import s from './FooterNavigation.module.css';

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
