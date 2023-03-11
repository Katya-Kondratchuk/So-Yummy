import { NavLink } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <nav>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/signin">Sign in</NavLink>
    </nav>
  );
};

export default WelcomePage;
