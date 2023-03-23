import React, { useState } from 'react';
import css from './MotivatingModal.module.css';
import img_blur from './images/m_blur.png';
import img_first_shl from './images/m_first_shl.png';
import img_100days from './images/m_100days.png';
import img_10rec_tofav from './images/m_10rec_tofav.png';
import img_first_tofav from './images/m_first_tofav.png';

const MotivatingModal = ({ option }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    document.removeEventListener('keydown', handleKeyDown);
  };

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  document.addEventListener('keydown', handleKeyDown);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  const getContent = () => {
    switch (option) {
      case 1:
        return (
          <div className={css.content}>
            <img
              className={css.image}
              src={img_first_shl}
              alt="img_first_shl"
            />
            <img className={css.blur} src={img_blur} alt="blur" />

            <p className={css.text}>
              <span>Wow!</span> You have created your first shopping list!
            </p>
          </div>
        );
      case 2:
        return (
          <div className={css.content}>
            <img className={css.image} src={img_100days} alt="img_100days" />
            <img className={css.blur} src={img_blur} alt="blur" />

            <p className={css.text}>
              <span>Wow!</span> You have been using the application for
              <span> 100 </span>
              days!
            </p>
          </div>
        );
      case 3:
        return (
          <div className={css.content}>
            <img
              className={css.image}
              src={img_10rec_tofav}
              alt="img_10rec_tofav"
            />
            <img className={css.blur} src={img_blur} alt="blur" />

            <p className={css.text}>
              <span>Wow!</span> You have added <span> 10 </span> recipes to your
              favorites!
            </p>
          </div>
        );
      case 4:
        return (
          <div className={css.content}>
            <img
              className={css.image}
              src={img_first_tofav}
              alt="img_first_tofav"
            />
            <img className={css.blur} src={img_blur} alt="blur" />

            <p className={css.text}>
              <span>Wow!</span> You have added the first recipe to your
              favorites!
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return isVisible ? (
    <div className={css.backdrop} onClick={handleOverlayClick}>
      <div className={css.wrapper}>
        <button className={css.closeButton} onClick={handleClose}>
          &#10005;
        </button>
        {getContent()}
      </div>
    </div>
  ) : null;
};

export default MotivatingModal;
