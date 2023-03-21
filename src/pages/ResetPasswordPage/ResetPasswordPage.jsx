import ResetPassForm from 'components/SigninForm/ResetPassForm';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAuthResetEmail } from 'redux/auth/authSelectors';
import { postResetPassword, postSetNewPassword } from 'services/api/recipesAPI';

let verify = null;

const ResetPasswordPage = () => {
  const { resetEmailToken } = useParams();
  const [token, setToken] = useState('');
  const [tokenState, setTokenState] = useState(false);
  const userCurrentEmail = useSelector(selectAuthResetEmail);

  useEffect(() => {
    if (!resetEmailToken) return;
    if (resetEmailToken === verify) return;

    verify = resetEmailToken;

    postResetPassword({
      email: userCurrentEmail,
      resetEmailToken: resetEmailToken,
    })
      .then(data => {
        console.log(data);
        setToken(data.resetPasswordToken);
        setTokenState(true);
        // verify = null;
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [resetEmailToken, userCurrentEmail]);

  const onSubmitResetPassword = password => {
    if (tokenState) {
      console.log({
        email: userCurrentEmail,
        password: password,
        resetPasswordToken: token,
      });
      return postSetNewPassword({
        email: userCurrentEmail,
        password: password,
        resetPasswordToken: token,
      });
    } else return;
  };

  return (
    <div>
      <ResetPassForm onSubmitResetPassword={onSubmitResetPassword} />
    </div>
  );
};

export default ResetPasswordPage;