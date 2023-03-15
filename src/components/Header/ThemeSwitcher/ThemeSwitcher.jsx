import css from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const handleThemeChange = event => {
    const html = document.querySelector('html');
    html.classList.toggle('ThemeDark', event.target.checked);
  };

  return (
    <div className={css.container}>
      <input
        className={css.input}
        type="checkbox"
        id="theme-switcher"
        onChange={handleThemeChange}
      />
      <label className={css.label} htmlFor="theme-switcher">
        <span className={css.span} />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
