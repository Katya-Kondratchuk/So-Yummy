import React from 'react';
// import FormInput from "reusableComponents/FormInput/FormInput";
import s from './SubscribeForm.module.css';

const SubscribeForm = () => {
  return (
    <div className={s.navRight}>
      <h3>Subscribe to our Newsletter</h3>
      <p>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </p>
      <div className={s.subscribeForm}>{/* <FormInput/> */}</div>
    </div>
  );
};

export default SubscribeForm;
