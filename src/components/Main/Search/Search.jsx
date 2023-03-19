import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import SearchInput from 'reusableComponents/SearchInput/SearchInput';
import Hero from '../Hero/Hero';
import ChooseYourBreakfast from '../СhooseYourBreakfast/ChooseYourBreakfast';
import css from './Search.module.css';

const MainHero = () => {
  const navigate = useNavigate();
  const onInputSubmit = e => {
    e.preventDefault();
    if (!e.target.search.value) return;
    navigate('/search');
  };
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
      <form onSubmit={onInputSubmit} className={css.heroInput}>
        <SearchInput name="search" lnk dark />
      </form>
      <Hero />
    </div>
  );
};

export default MainHero;
