import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { verificationUser } from 'redux/auth/authOperation';
import SigninForm from 'components/SigninForm';
import GoToTop from 'services/scrollToTop';

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
      })
      .catch(() => {});
  }, [dispatch, verificationToken, navigate]);

  return (
    <div>
      <SigninForm />
      <GoToTop />
    </div>
  );
};

export default VerifyPage;
