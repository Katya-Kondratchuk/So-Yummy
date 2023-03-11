import React from 'react';
import ConfirmButton from '../Button/Button';

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
        <ConfirmButton
          // yourClassName={css.confirmButton}
          label={buttonLabel}
          // onClick = {}
          // disabled
          backgroundColor={'var(--greenColor)'}
          color={'var(--buttonTextColor)'}
          type={'submit'}

          // disabled={loading || !isValid}
        >
          {/* {loading ? <LoadingSpiner /> : t('auth.title.register')} */}
        </ConfirmButton>
        {/* <LinkyStyled
        to="/login"
      >
      </LinkyStyled> */}
      </form>
    </div>
  );
};

export default UserDataForm;
