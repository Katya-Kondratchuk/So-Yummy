import React from 'react';
import styles from './Button.module.css';

function Button({
  label,
  onClick,
  disabled,
  backgroundColor,
  color,
  FunButton,
  type,
  href,
  isLink,
  divClassName,
}) {
  const className = FunButton
    ? `${styles.normalButton} ${styles.funButton}`
    : styles.normalButton;
  const style = {
    backgroundColor,
    color,
  };

  if (isLink) {
    return (
      <div className={divClassName}>
        <a
          href={href}
          onClick={onClick}
          role="button"
          disabled={disabled}
          className={className}
          style={style}
          type={type}
        >
          {label}
        </a>
      </div>
    );
  } else {
    return (
      <div className={divClassName}>
        <button
          onClick={onClick}
          disabled={disabled}
          className={className}
          style={style}
          type={type}
        >
          {label}
        </button>
      </div>
    );
  }
}

export default Button;

//==============================================================
//ИНСТРУКЦИЯ\\
// Добавление пропса "isLink" компонент превращается в ссылку.(по умолчанию - кнопка)
// Добавление пропса "funButton" кнопка меняет форму.(по умолчанию - обычная форма)
// Кинул к пропсам пустой класс, в котором каждый сможет прописать свои медиаправила.
