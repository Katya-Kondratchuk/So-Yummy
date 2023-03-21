import ResetPassForm from 'components/SigninForm/ResetPassForm';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAuthUserEmail } from 'redux/auth/authSelectors';
import { postResetPassword, postSetNewPassword } from 'services/api/recipesAPI';

let verify = null;

const ResetPasswordPage = () => {
  const { resetEmailToken } = useParams();

  const userCurrentEmail = useSelector(selectAuthUserEmail);

  useEffect(() => {
    if (!resetEmailToken) return;
    if (resetEmailToken === verify) return;

    verify = resetEmailToken;

    postResetPassword({
      email: userCurrentEmail,
      resetEmailToken: resetEmailToken,
    })
      .then(() => {
        verify = null;
      })
      .catch(() => {
        verify = null;
      });
  }, [resetEmailToken, userCurrentEmail]);

  const onSubmitResetPassword = password => {
    postSetNewPassword({
      email: userCurrentEmail,
      password: password,
      resetPasswordToken: resetEmailToken,
    });
  };

  return (
    <div>
      <ResetPassForm onSubmitResetPassword={onSubmitResetPassword} />
    </div>
  );
};

export default ResetPasswordPage;
