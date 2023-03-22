import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthRefreshToken } from 'redux/auth/authSelectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(selectAuthRefreshToken);
  return token ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
