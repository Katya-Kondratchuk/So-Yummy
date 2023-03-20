import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { verificationUser } from 'redux/auth/authOperation';
import SigninForm from 'components/SigninForm';

let verify = null;

const VerifyPage = () => {
  const { verificationToken } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!verificationToken) return;
    if (verificationToken === verify) return;

    verify = verificationToken;

    dispatch(verificationUser(verificationToken))
      .then(() => {
        navigate('/signin', `{ replace }`);
        verify = null;
      })
      .catch(() => {
        verify = null;
      });
  }, [dispatch, verificationToken, navigate]);

  return (
    <div>
      <SigninForm />
    </div>
  );
};

export default VerifyPage;
