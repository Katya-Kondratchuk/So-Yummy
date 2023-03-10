import React from 'react';
import s from './TreshButton.module.css';
import { ReactComponent as TreshIconSvg } from '../../assets/images/TreshButton/Icon.svg';

const TreshButton = ({ onDelete }) => {
  return (
    <button type="button" className={s.tresh_button} onClick={onDelete}>
      <TreshIconSvg className={s.tresh_icon} />
    </button>
  );
};

export default TreshButton;
