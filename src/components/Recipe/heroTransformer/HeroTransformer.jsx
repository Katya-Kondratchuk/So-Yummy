import css from './HeroTransformer.module.css';

const HeroTransformer = ({ children }) => {
  return (
    <div className={css.heroBackground}>
      {children}
      <div className={css.heroRightside}></div>

      <div className={css.heroLeftside}></div>
    </div>
  );
};
export default HeroTransformer;
