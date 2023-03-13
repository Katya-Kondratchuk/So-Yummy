import { ReactComponent as UserIcon } from '../assets/images/formInputIcons/user.svg';
import { ReactComponent as MailIcon } from '../assets/images/formInputIcons/mail.svg';
import { ReactComponent as LockIcon } from '../assets/images/formInputIcons/lock.svg';

const switchImages = name => {
  switch (name) {
    case 'text':
      return <UserIcon />;

    case 'email':
      return <MailIcon />;

    case 'password':
      return <LockIcon />;

    default:
      return <UserIcon />;
  }
};

export default switchImages;
