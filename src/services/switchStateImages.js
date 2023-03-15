import { ReactComponent as SucsessIcon } from '../assets/images/formInputIcons/sucsess.svg';
import { ReactComponent as WarningIcon } from '../assets/images/formInputIcons/warning.svg';
import { ReactComponent as ErorrIcon } from '../assets/images/formInputIcons/erorr.svg';
import { ReactComponent as EditIcon } from '../assets/images/formInputIcons/erorr.svg';
import warningValidation from './warningValidation';

const switchStateImages = (erorr, value, edit, type = '') => {
  if (!erorr && value && !warningValidation(value) && type === 'password') {
    return <WarningIcon />;
  } else if (erorr) {
    return <ErorrIcon />;
  } else if (!erorr && value) {
    return <SucsessIcon />;
  } else if (!erorr && !value && edit) {
    return <EditIcon />;
  } else {
    return;
  }
};

export default switchStateImages;
