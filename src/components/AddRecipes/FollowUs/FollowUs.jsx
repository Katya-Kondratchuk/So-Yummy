import SocialLinks from 'reusableComponents/SocialLinks/SocialLinks';
import css from './FollowUs.module.css';

const FollowUs = () => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Follow us</h3>
      <SocialLinks />
    </div>
  );
};

export default FollowUs;
