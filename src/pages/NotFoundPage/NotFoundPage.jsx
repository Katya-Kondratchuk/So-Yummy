import NotFound from 'components/NotFound';
import React from 'react';
import GoToTop from 'services/scrollToTop';

const NotFoundPage = () => {
  return (
    <>
      <NotFound />
      <GoToTop />
    </>
  );
};

export default NotFoundPage;
