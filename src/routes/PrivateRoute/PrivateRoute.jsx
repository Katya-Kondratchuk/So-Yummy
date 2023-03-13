import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectAuthIsLoggedIn,
  selectAuthRefreshToken,
} from 'redux/auth/authSelectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const token = useSelector(selectAuthRefreshToken);

  return isLoggedIn ? (
    Component
  ) : token ? (
    Component
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default PrivateRoute;
