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
}) => {
  const loading = useSelector(selectAuthLoading);
  const erorMessage = useSelector(selectAuthErrorMessage);
  console.log(erorMessage);
  console.log(useSelector(state => state.auth));
  return (
    <div className={yourClassName}>
      <form onSubmit={formik.handleSubmit}>
        {children}
        <Button
          label={buttonLabel}
          // onClick = {}
          divClassName={css.divButtonClass}
          type={'submit'}
          disabled={loading || !isValid}
        />
        {!erorMessage && notify && !loading && (
          <span className={css.notification}>
            You successfully registered! Check email for verification!
          </span>
        )}
      </form>
    </div>
  );
};

export default UserDataForm;
