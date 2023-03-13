import React from 'react';
import css from './ConfirmModal.module.css';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperation';
import MobMenuCloseBtn from 'components/Header/MobileNavMenu/MobMenuCloseBtn/MobMenuCloseBtn';

const ConfirmModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleLogoutBtnClick = () => {
    onClose();
    dispatch(logoutUser());
  };

  return (
    <div className={css.container}>
      <span className={css.title}>Are you sure you want to log out?</span>
      <div className={css.btnWrp}>
        <button onClick={handleLogoutBtnClick} className={css.confirmBtn}>
          Log Out
        </button>
        <button onClick={onClose} className={css.confirmBtn}>
          Cancel
        </button>
      </div>
      <MobMenuCloseBtn onClick={onClose} />
    </div>
  );
};

export default ConfirmModal;
