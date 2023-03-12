import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { verificationUser } from 'redux/auth/authOperation';

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
  }, [dispatch, verificationToken]);

  return (
    <div>Checking the correctness of the verification code! Wait, please!</div>
  );
};

export default VerifyPage;
