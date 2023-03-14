import css from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  return (
    <div className={css.container}>
      <input className={css.input} type="checkbox" id="theme-switcher" />
      <label className={css.label} htmlFor="theme-switcher">
        <span className={css.span} />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
