import { Link } from 'react-router-dom';
import css from './AuthLinkTo.module.css';

const AuthLinkTo = ({ route, routeText, yourClassName }) => {
  return (
    <Link className={`${css.authLinkTo} ${yourClassName}`} to={route}>
      {routeText}
    </Link>
  );
};

export default AuthLinkTo;
