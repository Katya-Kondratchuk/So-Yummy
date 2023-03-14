import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { verificationUser } from 'redux/auth/authOperation';
import SigninForm from 'components/SigninForm';

const VerifyPage = () => {
  const { verificationToken } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (verificationToken) {
      dispatch(verificationUser(verificationToken)).then(() => {
        navigate('/signin', `{ replace }`);
      });
    }
  }, [dispatch, verificationToken, navigate]);

  return (
    <div>
      <SigninForm />
    </div>
  );
};

export default VerifyPage;
