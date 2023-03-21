import ResetPassForm from 'components/SigninForm/ResetPassForm';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAuthResetEmail } from 'redux/auth/authSelectors';
import { postResetPassword, postSetNewPassword } from 'services/api/recipesAPI';

const ResetPasswordPage = () => {
  const { resetEmailToken } = useParams();
  //   const [resettoken, setToken] = useState('');
  const userCurrentEmail = useSelector(selectAuthResetEmail);

  useEffect(() => {
    if (!resetEmailToken) return;

    setTimeout(async () => {
      await postResetPassword({
        email: userCurrentEmail,
        resetEmailToken: resetEmailToken,
      })
        .then(({ resetPasswordToken }) => {
          console.log(resetPasswordToken);
          //   setToken(resetPasswordToken);
          localStorage.setItem('token', JSON.stringify(resetPasswordToken));
          console.log(resetPasswordToken);
          console.log(JSON.stringify(resetPasswordToken));
        })
        .catch(error => {
          console.log(error.message);
        });
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmitResetPassword = password => {
    console.log(localStorage.getItem('token'));
    postSetNewPassword({
      email: userCurrentEmail,
      password: password,
      resetPasswordToken: JSON.parse(localStorage.getItem('token')),
    });
  };

  return (
    <div>
      <ResetPassForm onSubmitResetPassword={onSubmitResetPassword} />
    </div>
  );
};

export default ResetPasswordPage;
