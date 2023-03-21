import ResetPassForm from 'components/SigninForm/ResetPassForm';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAuthResetEmail } from 'redux/auth/authSelectors';
import { postResetPassword, postSetNewPassword } from 'services/api/recipesAPI';

// let verify = null;

const ResetPasswordPage = () => {
  const { resetEmailToken } = useParams();
  const [resettoken, setToken] = useState('');
  const userCurrentEmail = useSelector(selectAuthResetEmail);

  useEffect(() => {
    if (!resetEmailToken) return;
    // if (resetEmailToken === verify) return;

    // verify = resetEmailToken;

    postResetPassword({
      email: userCurrentEmail,
      resetEmailToken: resetEmailToken,
    })
      .then(data => {
        console.log(data);
        setToken(data.resetPasswordToken);
        // verify = null;
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [resetEmailToken, userCurrentEmail]);

  const onSubmitResetPassword = password => {
    console.log({
      email: userCurrentEmail,
      password: password,
      resetPasswordToken: resettoken,
    });
    postSetNewPassword({
      email: userCurrentEmail,
      password: password,
      resetPasswordToken: resettoken,
    });
  };
  // password => {
  //   onSubmitResetPassword(password, token);
  // }
  return (
    <div>
      <ResetPassForm
        onSubmitResetPassword={onSubmitResetPassword}
        resettoken={resettoken}
      />
    </div>
  );
};

export default ResetPasswordPage;
