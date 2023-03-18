import Alert from 'components/NotFound/Alert/Alert';
import React from 'react';
// import nothingImg from '../../../assets/images/FavoriteImg/default-min.jpeg';
import css from './NothingAdd.module.css';

const NothingAdd = () => {
  return (
    <div className={css.container}>
      {/* <img className={css.nothingAddImg} src={nothingImg} alt="default image" /> */}
      <Alert
        classAlert={css.alertPartTwo}
        textPartOne="Unfortunately,"
        textPartTwo=" nothing has been added to favorites..."
      />
    </div>
  );
};

export default NothingAdd;
