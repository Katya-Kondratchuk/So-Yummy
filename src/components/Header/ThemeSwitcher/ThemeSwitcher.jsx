import { useState } from 'react';
import css from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle(css.themeDark);
    const audio = new Audio();
    audio.src = isDarkMode
      ? require('../../../assets/sounds/02036.mp3')
      : require('../../../assets/sounds/cricket-sound.mp3');
    audio.play();

    setTimeout(() => {
      audio.pause();
    }, 2500);
  };

  return (
    <div className={css.container}>
      <input
        className={css.input}
        type="checkbox"
        id="theme-switcher"
        onChange={toggleTheme}
        checked={isDarkMode}
      />
      <label className={css.label} htmlFor="theme-switcher">
        <span className={css.span} />
      </label>
    </div>
  );
};

export default ThemeSwitcher;
