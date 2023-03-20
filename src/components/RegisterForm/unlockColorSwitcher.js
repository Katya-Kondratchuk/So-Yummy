import css from './RegisterForm.module.css';
import warningValidation from 'services/warningValidation';

const switchColorUnlock = (erorr, value, unlockButtonSignIn = '') => {
  if (!erorr && value && !warningValidation(value)) {
    return `${css.unlockButton} ${css.iconStateInsecure} ${unlockButtonSignIn}`;
  } else if (erorr && value) {
    return `${css.unlockButton} ${css.iconStateInvalid} ${unlockButtonSignIn}`;
  } else if (!erorr && value) {
    return `${css.unlockButton} ${css.iconStateValid} ${unlockButtonSignIn}`;
  } else {
    return `${css.unlockButton} ${unlockButtonSignIn}`;
  }
};

export default switchColorUnlock;
