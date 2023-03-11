import { Link } from 'react-router-dom';
import Button from 'reusableComponents/Button/Button';
import css from './WelcomePage.module.css';


const WelcomePage = () => {
  return (
    <>
      <div className={css.backgroundImg}>
        <div className={css.welcomeTitleFormat}>
          <h1 className={css.welcomeTitle}>Whelcome to the app!</h1>
          <p className={css.welcomeText}>
            Is not only a recipe app, it is, in fact, your cookbook. You can add
            your own recipes to save them for the future.
          </p>
        </div>

        <Link to="/register">Registration</Link>
        <Link to="/signin">Sign in</Link>
      </div>
      <Button
        backgroundColor="black"
        color="white"
        divClassName={css.button}
        FunButton
        label={'See recipe'}
      />
      <Button
        backgroundColor="black"
        color="white"
        divClassName={css.button}
        FunButton
        label={'See recipe'}
      />
    </>
  );
};

export default WelcomePage;
