import React from 'react';
import img from '../../assets/images/NotFound/404errorPage.png';
import css from './NotFound.module.css';
import Alert from './Alert/Alert';
import BGDots from '../../reusableComponents/BGDots/BGDots';

const NotFound = () => {
  return (
    <div className='container'>
      <BGDots />
        <div className={css.container}>
          <img src={img} alt="Logo" className={css.image} />
          <Alert
            textPartOne="We are sorry,"
            textPartTwo="but the page you were looking for can’t be found..."
          />
        </div>
    </div>
  );
};

export default NotFound;
