import React from 'react';
import FormInput from '../../reusableComponents/FormInput/FormInput';
import { ReactComponent as UserIcon } from './user.svg';
import { ReactComponent as MailIcon } from './mail.svg';
import { ReactComponent as LockIcon } from './lock.svg';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const switchImages = name => {
    switch (name) {
      case 'name':
        return <UserIcon />;

      case 'email':
        return <MailIcon />;

      case 'password':
        return <LockIcon />;

      default:
        return <UserIcon className={css.img} />;
    }
  };
  return (
    <div>
      <FormInput
        switchImages={switchImages}
        placeholder={'name'}
        type={'name'}
      />
      <FormInput
        switchImages={switchImages}
        placeholder={'email'}
        type={'email'}
      />
      <FormInput
        switchImages={switchImages}
        placeholder={'password'}
        type={'password'}
      />
    </div>
  );
};

export default RegisterForm;
