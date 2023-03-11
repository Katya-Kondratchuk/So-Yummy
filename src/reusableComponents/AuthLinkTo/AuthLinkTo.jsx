import { Link } from 'react-router-dom';
import css from './AuthLinkTo.module.css';

const AuthLinkTo = ({ route, routeText }) => {
  return (
    <Link className={css.authLinkTo} to={routeText}>
      {routeText}
    </Link>
  );
};

export default AuthLinkTo;
