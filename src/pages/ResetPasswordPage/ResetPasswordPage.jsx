import ResetPassForm from 'components/SigninForm/ResetPassForm';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectAuthResetEmail } from 'redux/auth/authSelectors';
import { postResetPassword, postSetNewPassword } from 'services/api/recipesAPI';
import { toast } from 'react-toastify';

const ResetPasswordPage = () => {
  const { resetEmailToken } = useParams();
  const userCurrentEmail = useSelector(selectAuthResetEmail);
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!resetEmailToken) return;

    postResetPassword({
      email: userCurrentEmail,
      resetEmailToken: resetEmailToken,
    })
      .then(({ resetPasswordToken }) => {
        // localStorage.setItem('token', JSON.stringify(resetPasswordToken));
        setToken(resetPasswordToken);
      })
      .catch(error => {
        console.log(error.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmitResetPassword = password => {
    postSetNewPassword({
      email: userCurrentEmail,
      password: password,
      // resetPasswordToken: JSON.parse(localStorage.getItem('token')),
      resetPasswordToken: token,
    });
    toast.success('Your password was change');
    navigate('/signin');
  };

  return (
    <div>
      <ResetPassForm onSubmitResetPassword={onSubmitResetPassword} />
    </div>
  );
};

export default ResetPasswordPage;
