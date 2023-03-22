import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthRefreshToken } from 'redux/auth/authSelectors';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(selectAuthRefreshToken);
  return token ? <Navigate to={redirectTo} replace /> : Component;
};

export default PublicRoute;
