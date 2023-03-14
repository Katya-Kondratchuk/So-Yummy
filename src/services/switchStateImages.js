import { ReactComponent as SucsessIcon } from '../assets/images/formInputIcons/sucsess.svg';
import { ReactComponent as WarningIcon } from '../assets/images/formInputIcons/warning.svg';
import { ReactComponent as ErorrIcon } from '../assets/images/formInputIcons/erorr.svg';
import { ReactComponent as EditIcon } from '../assets/images/formInputIcons/erorr.svg';

const switchStateImages = (erorr, value, edit) => {
  if (
    erorr ===
    'Your password is little secure. Add a number or a capital letter.'
  ) {
    return <WarningIcon />;
  } else if (erorr) {
    return <ErorrIcon />;
  } else if (!erorr && value) {
    return <SucsessIcon />;
  } else if (edit) {
    return <EditIcon />;
  } else {
    return;
  }
};

export default switchStateImages;
