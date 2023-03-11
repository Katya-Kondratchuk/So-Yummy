// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectAuthIsLoggedIn } from 'redux/auth/authSelectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return true ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
