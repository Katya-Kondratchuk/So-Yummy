import css from './ThemeSwitcher.module.css';

const audioLight = new Audio('02036.mp3');
const audioDark = new Audio('cricket-sound.mp3');

const ThemeSwitcher = () => {
  const handleThemeChange = event => {
    const html = document.querySelector('html');
    const isDark = event.target.checked;

    if (isDark !== html.classList.contains('ThemeDark')) {
      html.classList.toggle('ThemeDark', isDark);

      const audio = isDark ? audioDark : audioLight;
      audio.play();
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, 2000);
    }
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
