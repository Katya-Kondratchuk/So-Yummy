import FooterForm from 'components/Footer/FooterForm/FooterForm';
import React from 'react';
import s from './SubscribeForm.module.css';

const SubscribeForm = () => {
  return (
    <div className={s.navRight}>
      <h3>Subscribe to our Newsletter</h3>
      <p>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </p>
      <div className={s.subscribeForm}>
        <FooterForm />
      </div>
    </div>
  );
};

export default SubscribeForm;
