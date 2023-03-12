import Footer from 'components/Footer';
import Header from 'components/Header';
import LoaderSuspense from 'components/LoaderSuspense/LoaderSuspense';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthLoading } from 'redux/auth/authSelectors';

const SharedLayout = () => {
  const loadind = useSelector(selectAuthLoading);
  return (
    <>
      {!loadind && <Header />}

      <Suspense fallback={<LoaderSuspense />}>
        <Outlet />
      </Suspense>

      {!loadind && <Footer />}
    </>
  );
};

export default SharedLayout;
