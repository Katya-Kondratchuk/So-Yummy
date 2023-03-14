import { useMediaQuery } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { ReactComponent as SvgLogo } from '../../../assets/images/LogoHeader/logoHeader.svg';
import { ReactComponent as SvgLogoInv } from '../../../assets/images/LogoHeader/logoInv.svg';
import css from './HeaderLogo.module.css';
const HeaderLogo = ({ inv }) => {
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 767px)');
  const path = location.pathname;
  const isInv = path === '/main' && isMobile;
  if (isInv) {
    return <SvgLogoInv className={css.logo} />;
  }
  return <SvgLogo className={css.logo} />;
};

export default HeaderLogo;
