import React from 'react';
import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';
import css from './EditUserForm.module.css';
import { ReactComponent as EditPen } from '../../../../assets/images/editPen/editPen.svg';
import UserArrowSvg from 'components/Header/UserMenu/UserArrowSvg/UserArrowSvg';

const EditUserForm = ({ closeModal, openEdit, openConfirm, container }) => {
  const rect = container.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const style = {
    top: `${Math.round(rect.bottom + 15)}px`,
    right: `${Math.round(viewportWidth - rect.right)}px`,
  };
  const editBtnClickHandle = () => {
    closeModal();
    openEdit();
  };
  const logOutBtnClickHandle = () => {
    closeModal();
    openConfirm();
  };
  return (
    <div style={style} className={css.container}>
      <button onClick={editBtnClickHandle} className={css.editBtn}>
        <span className={css.editSpan}>Edit profile</span>
        <EditPen className={css.editPen} />
      </button>

      <div onClick={logOutBtnClickHandle} className={css.btnWrp}>
        <SuperBtn typeBtn="submit" title={'LogOut'}>
          <UserArrowSvg />
        </SuperBtn>
      </div>
    </div>
  );
};

export default EditUserForm;
