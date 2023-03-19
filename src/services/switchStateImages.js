import { ReactComponent as SucsessIcon } from '../assets/images/formInputIcons/sucsess.svg';
import { ReactComponent as WarningIcon } from '../assets/images/formInputIcons/warning.svg';
import { ReactComponent as ErorrIcon } from '../assets/images/formInputIcons/erorr.svg';
import { ReactComponent as EditIcon } from '../assets/images/formInputIcons/edit.svg';
import warningValidation from './warningValidation';

const switchStateImages = (erorr, value, formInputUserMenu, name = '') => {
  if (!erorr && value && !warningValidation(value) && name === 'password') {
    return <WarningIcon />;
  } else if (erorr && value) {
    return <ErorrIcon />;
  } else if (!erorr && value) {
    return <SucsessIcon />;
  } else if (!erorr && !value && formInputUserMenu && name === 'userName') {
    return <EditIcon />;
  } else {
    return;
  }
};

export default switchStateImages;
