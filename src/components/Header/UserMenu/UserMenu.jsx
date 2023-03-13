import { useState } from 'react';
import Modal from 'reusableComponents/Modal/Modal';
import UserAvatar from './UserAvatar/UserAvatar';
import css from './UserMenu.module.css';
import UserName from './UserName/UserName';

const UserMenu = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className={css.container} onClick={openModal}>
        <UserAvatar />
        <UserName />
      </div>
      {modal && (
        <Modal onClose={closeModal}>
          <div>MODAL</div>
        </Modal>
      )}
    </>
  );
};

export default UserMenu;
