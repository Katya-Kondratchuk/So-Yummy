import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
const modalRoot = document.querySelector('#modalPortal');
const body = document.querySelector('body');

const Modal = ({ children, onClose }) => {
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const closeModal = () => {
    onClose();
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  useEffect(() => {
    body.classList.add('openModal');
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', closeModal);

    return () => {
      body.classList.remove('openModal');
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', closeModal);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot,
  );
};

export default Modal;
