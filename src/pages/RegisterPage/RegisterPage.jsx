import RegisterForm from 'components/RegisterForm/RegisterForm';
import React from 'react';
import GoToTop from 'services/scrollToTop';

const RegisterPage = () => {
  return (
    <>
      <RegisterForm />
      <GoToTop />
    </>
  );
};

export default RegisterPage;
