import { useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { verificationUser } from 'redux/auth/authOperation';
import SigninForm from 'components/SigninForm';

const VerifyPage = () => {
  const { verificationToken } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOneVerify = useRef(true);

  useEffect(() => {
    if (verificationToken) {
      if (isOneVerify.current) {
        dispatch(verificationUser(verificationToken)).then(() => {
          navigate('/signin', `{ replace }`);
        });
        isOneVerify.current = false;
      }
    }
  }, [dispatch, verificationToken, navigate, isOneVerify]);

  return (
    <div>
      <SigninForm />
    </div>
  );
};

export default VerifyPage;
