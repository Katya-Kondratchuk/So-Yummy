import ResetPassForm from 'components/SigninForm/ResetPassForm';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAuthResetEmail } from 'redux/auth/authSelectors';
import { postResetPassword, postSetNewPassword } from 'services/api/recipesAPI';

const ResetPasswordPage = () => {
  const { resetEmailToken } = useParams();
  const [resettoken, setToken] = useState('');
  const userCurrentEmail = useSelector(selectAuthResetEmail);

  useEffect(() => {
    if (!resetEmailToken) return;

    setTimeout(async () => {
      await postResetPassword({
        email: userCurrentEmail,
        resetEmailToken: resetEmailToken,
      })
        .then(data => {
          console.log(data);
          setToken(data.resetPasswordToken);
          console.log(resettoken);
        })
        .catch(error => {
          console.log(error.message);
        });
      console.log(resettoken);
    }, 100);
    console.log(resettoken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
