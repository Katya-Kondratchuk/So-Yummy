import SigninForm from 'components/SigninForm';
// import ResetPassEmailForm from 'components/SigninForm/ResetPassEmailForm';
import React from 'react';
import GoToTop from 'services/scrollToTop';

const SigninPage = () => {
  return (
    <>
      <SigninForm />
      {/* <ResetPassEmailForm /> */}
      <GoToTop />
    </>
  );
};

export default SigninPage;
