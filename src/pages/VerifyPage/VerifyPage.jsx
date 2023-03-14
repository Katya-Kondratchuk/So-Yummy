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

  if (verificationToken) {
    console.log('🚀 ~ isOneVerify.current: befor if', isOneVerify.current);
    console.log('🚀 ~ verificationToken:', verificationToken);
    if (isOneVerify.current) {
      console.log('🚀 ~ isOneVerify.current:', isOneVerify.current);
      console.log('horray');
      isOneVerify.current = false;
      dispatch(verificationUser(verificationToken)).then(() => {
        navigate('/signin', `{ replace }`);
      });
    }
  }

  useEffect(() => {
    if (verificationToken) {
      console.log('🚀 ~ isOneVerify.current: befor if', isOneVerify.current);
      console.log('🚀 ~ verificationToken:', verificationToken);
      if (isOneVerify.current) {
        console.log('horray');
        isOneVerify.current = false;
        console.log('🚀 ~ isOneVerify.current:after if', isOneVerify.current);
        dispatch(verificationUser(verificationToken))
          .then(() => {
            navigate('/signin', `{ replace }`);
          })
          .catch(error => {
            console.log('🚀 ~ error inside verify:', error);
          });
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
