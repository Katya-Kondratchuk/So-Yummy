import Footer from 'components/Footer';
import Header from 'components/Header';
import LoaderSuspense from 'components/LoaderSuspense/LoaderSuspense';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <Header />

        <Suspense fallback={<LoaderSuspense />}>
          <Outlet />
        </Suspense>
      </div>

      <div className={css.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default SharedLayout;
