import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyResendEmail } from 'redux/auth/authOperation';
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
  isLoading = false,
}) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectAuthLoading);
  const erorMessage = useSelector(selectAuthErrorMessage);
  const hendleResendClick = () => {
    dispatch(
      verifyResendEmail({
        email: formik.values.email,
        password: formik.values.password,
      }),
    );
  };

  return (
    <form onSubmit={formik.handleSubmit} className={yourClassName}>
      {children}
      <Button
        label={buttonLabel}
        divClassName={divButtonClass}
        type="submit"
        disabled={isLoading || loading || !isValid}
      />
      {!erorMessage && notify && !loading && isValid ? (
        <button
          type="button"
          onClick={hendleResendClick}
          className={css.notification}
          disabled={loading}
        >
          Check your email for verification! Click here to resend.
        </button>
      ) : (
        <span className={css.notification}> </span>
      )}
      {erorMessage === 'Email is not verified' && (
        <button
          type="button"
          disabled={loading}
          onClick={hendleResendClick}
          className={css.notification}
        >
          Email is not verified! Click here to resend.
        </button>
      )}
    </form>
  );
};

export default UserDataForm;
