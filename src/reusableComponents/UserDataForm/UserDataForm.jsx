import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectAuthErrorMessage,
  selectAuthLoading,
} from 'redux/auth/authSelectors';
import Button from '../Button/Button';
import css from './UserDataForm.module.css';
const UserDataForm = ({
  children,
  buttonLabel,
  formik,
  yourClassName = '',
  isValid,
  notify,
  divButtonClass,
}) => {
  const loading = useSelector(selectAuthLoading);
  const erorMessage = useSelector(selectAuthErrorMessage);
  return (
    <form onSubmit={formik.handleSubmit} className={yourClassName}>
      {children}
      <Button
        label={buttonLabel}
        // onClick = {}
        divClassName={divButtonClass}
        type={'submit'}
        disabled={loading || !isValid}
      />
      {!erorMessage && notify && !loading && isValid ? (
        <span className={css.notification}>
          Check your email for verification!
        </span>
      ) : (
        <span className={css.notification}> </span>
      )}
      {!erorMessage === 'Email is not verified' && (
        <span className={css.notification}>Email is not verified!</span>
      )}
    </form>
  );
};

export default UserDataForm;
