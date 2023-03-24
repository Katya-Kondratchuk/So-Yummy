import React, { useEffect, useState } from 'react';
import css from './Unsubscribe.module.css';
import img_blur from '../../reusableComponents/MotivatingModal/images/m_blur.png';
import img_first_shl from '../Unsubscribe/Image20230323221828.jpg';
import { useNavigate, useParams } from 'react-router';
import { postUnsubscribeList } from 'services/api/recipesAPI';

const Unsubscribe = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { unsubscribeToken } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    postUnsubscribeList(unsubscribeToken)
      .then()
      .catch(error => console.log(error.message));
  }, [unsubscribeToken]);

  const handleClose = () => {
    setIsVisible(false);
    document.removeEventListener('keydown', handleKeyDown);
    navigate('/main');
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

  return isVisible ? (
    <div className={css.backdrop} onClick={handleOverlayClick}>
      <div className={css.wrapper}>
        <button className={css.closeButton} onClick={handleClose}>
          &#10005;
        </button>
        <div className={css.content}>
          <img className={css.image} src={img_first_shl} alt="img_first_shl" />
          <img className={css.blur} src={img_blur} alt="blur" />

          <p className={css.text}>You unsubscribed! We will miss you!</p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Unsubscribe;
