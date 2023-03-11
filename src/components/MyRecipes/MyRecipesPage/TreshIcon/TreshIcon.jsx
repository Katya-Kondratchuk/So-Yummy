import React from 'react';
import s from './TreshIcon.module.css';
// import { ReactComponent as TreshIconSvg } from '../../assets/images/TreshIcon/Icon.svg';
import { ReactComponent as TreshIconSvg } from '../../../assets/images/TreshIcon/Icon.svg';

const TreshIcon = ({ onDelete }) => {
  return (
    <button type="button" className={s.tresh_button} onClick={onDelete}>
      <TreshIconSvg className={s.tresh_icon} />
    </button>
  );
};

export default TreshIcon;
