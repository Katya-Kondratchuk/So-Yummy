import React from 'react';
import { ReactComponent as SvgLogo } from '../../assets/images/LogoHeader/logoHeader.svg';
import { ReactComponent as SvgLogoInv } from '../../assets/images/LogoHeader/logoInv.svg';
const Logo = ({ inv, width, height }) => {
  if (inv) {
    return <SvgLogoInv />;
  }
  return <SvgLogo style={{ width: width, height: height }} />;
};

export default Logo;
