import React from 'react';
import styles from './Button.module.css';

function Button({
  label,
  onClick,
  disabled,
  backgroundColor,
  color,
  FunButton,
  width,
  height,
  type,
}) {
  const className = FunButton
    ? `${styles.normalButton} ${styles.funButton}`
    : styles.normalButton;
  const style = {
    backgroundColor,
    color,
  };

  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
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

export default Button;
