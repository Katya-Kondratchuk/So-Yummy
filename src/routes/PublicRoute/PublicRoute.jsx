import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from 'redux/auth/authSelectors';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} replace /> : Component;
};

export default PublicRoute;
