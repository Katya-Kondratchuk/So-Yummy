import SigninForm from 'components/SigninForm';
import React from 'react';
import GoToTop from 'services/scrollToTop';

const SigninPage = () => {
  return (
    <>
      <SigninForm />
      <GoToTop />
    </>
  );
};

export default SigninPage;
