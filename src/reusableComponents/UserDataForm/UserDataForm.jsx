import React from 'react';
import Button from '../Button/Button';
import css from './UserDataForm.module.css';

const UserDataForm = ({
  children,
  buttonLabel,
  formik,
  yourClassName = '',
}) => {
  // const isValid = { schema }.isValidSync(formik.values);
  return (
    <div className={yourClassName}>
      <form onSubmit={formik.handleSubmit}>
        {children}

        {/* <LinkyStyled
        to="/login"
      >
      </LinkyStyled> */}
        <Button
          // yourClassName={css.confirmButton}
          label={buttonLabel}
          // onClick = {}
          // disabled
          divClassName={css.divButtonClass}
          backgroundColor={'var(--greenColor)'}
          color={'var(--bgColor)'}
          type={'submit'}

          // disabled={loading || !isValid}
        />
      </form>
    </div>
  );
};

export default UserDataForm;
