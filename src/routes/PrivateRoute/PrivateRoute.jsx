const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return Component;
};

export default PrivateRoute;
