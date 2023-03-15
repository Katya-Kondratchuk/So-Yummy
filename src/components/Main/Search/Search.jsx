import clsx from 'clsx';
import SearchInput from 'reusableComponents/SearchInput/SearchInput';
import Hero from '../Hero/Hero';
import ChooseYourBreakfast from '../СhooseYourBreakfast/ChooseYourBreakfast';
import css from './Search.module.css';

const MainHero = () => {
  return (
    <div className={clsx('container', css.container)}>
      <div className={css.nameWrapper}>
        <span className={css.heroNameCurrent}>So</span>
        <span className={css.heroName}>Yummy</span>
      </div>

      <p className={css.heroDescription}>
        "What to cook?" is not only a recipe app, it is, in fact, your cookbook.
        You can add your own recipes to save them for the future.
      </p>
      <ChooseYourBreakfast />
      <div className={css.heroInput}>
        <SearchInput lnk dark />
      </div>
      <Hero />
    </div>
  );
};

export default MainHero;
