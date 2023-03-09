import React from 'react';
import './normalButton.css';

function Button({
  label,
  onClick,
  disabled,
  backgroundColor,
  color,
  FunButton,
}) {
  const className = FunButton ? 'NormalButton FunButton' : 'NormalButton';
  const style = {
    backgroundColor,
    color,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={style}
    >
      {label}
    </button>
  );
}

export default Button;
