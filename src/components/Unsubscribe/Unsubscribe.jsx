import React, { useEffect, useState } from 'react';
import css from './Unsubscribe.module.css';
import img_blur from '../../reusableComponents/MotivatingModal/images/m_blur.png';
import img_first_shl from '../../reusableComponents/MotivatingModal/images/m_first_shl.png';
import { useParams } from 'react-router';
import { postUnsubscribeList } from 'services/api/recipesAPI';

const Unsubscribe = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { unsubscribeToken } = useParams();

  useEffect(() => {
    postUnsubscribeList(unsubscribeToken).then().catch();
  }, [unsubscribeToken]);

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
    return (
      <div className={css.content}>
        <img className={css.image} src={img_first_shl} alt="img_first_shl" />
        <img className={css.blur} src={img_blur} alt="blur" />

        <p className={css.text}>
          <span>Wow!</span> You have created your first shopping list!
        </p>
      </div>
    );
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

export default Unsubscribe;
