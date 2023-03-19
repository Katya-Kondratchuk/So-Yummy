import { useRef, useState } from 'react';
import Modal from 'reusableComponents/Modal/Modal';
import ConfirmModal from './ConfirmModal/ConfirmModal';
import EditUserForm from './EditUserForm/EditUserForm';
import UserAvatar from './UserAvatar/UserAvatar';
import css from './UserMenu.module.css';
import UserMenuModalForm from './UserMenuModalForm/UserMenuModalForm';
import UserName from './UserName/UserName';

const UserMenu = () => {
  const [modalSmall, setModalSmall] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalConfirm, setModalConfirm] = useState(false);

  const userMenuContainerRef = useRef();
  const openModal = () => {
    setModalSmall(true);
  };

  const closeModal = () => {
    setModalSmall(false);
  };

  const openModalEdit = () => {
    setModalEdit(true);
  };

  const closeModalEdit = () => {
    setModalEdit(false);
  };

  const openModalConfirm = () => {
    setModalConfirm(true);
  };

  const closeModalConfirm = () => {
    setModalConfirm(false);
  };

  return (
    <div className={css.wrapper}>
      <div
        ref={userMenuContainerRef}
        className={css.container}
        onClick={openModal}
      >
        <UserAvatar />
        <UserName />
      </div>
      {modalSmall && (
        <Modal onClose={closeModal}>
          <EditUserForm
            closeModal={closeModal}
            openEdit={openModalEdit}
            openConfirm={openModalConfirm}
            container={userMenuContainerRef.current}
          />
        </Modal>
      )}
      {modalEdit && (
        <Modal onClose={closeModalEdit}>
          <UserMenuModalForm />
        </Modal>
      )}
      {modalConfirm && (
        <Modal onClose={closeModalConfirm}>
          <ConfirmModal onClose={closeModalConfirm} />
        </Modal>
      )}
    </div>
  );
};

export default UserMenu;
