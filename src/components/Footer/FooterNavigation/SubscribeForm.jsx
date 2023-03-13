import React from 'react';
// import FormInput from "reusableComponents/FormInput/FormInput";
import s from '../Footer.module.css';

const SubscribeForm = () => {
  return (
    <div className={s.navRight}>
      <h3>Subscribe to our Newsletter</h3>
      <p>
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </p>
      <div style={{ width: '100%', height: '135px', backgroundColor: 'green' }}>
        {/* <FormInput/> */}
      </div>
    </div>
  );
};

export default SubscribeForm;
