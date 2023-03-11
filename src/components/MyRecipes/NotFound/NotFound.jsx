import React from "react";
import img from './404errorPage.png';
import css from './NotFound.module.css';
import Alert from './Alert/Alert';

const NotFound = () => {
  return (
    <div className={css.container}>
      <img src={img} alt="Logo" className={css.image}/>
      <Alert textPartOne="We are sorry," textPartTwo="but the page you were looking for can’t be found..."/>
    </div>
   
  )  
};

export default NotFound;
