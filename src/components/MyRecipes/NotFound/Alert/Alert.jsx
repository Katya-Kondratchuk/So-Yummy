import React from 'react';
import css from './Alert.module.css';

const Alert = ({ textPartOne, textPartTwo }) => {
    return (
        <div className={css.container}>
            <p className={css.alertPartOne}>{textPartOne}</p>
            <p className={css.alertPartTwo}>{textPartTwo}</p>
        </div> 
    )
};

export default Alert;