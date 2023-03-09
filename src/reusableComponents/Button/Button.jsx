import React from 'react';
import './Button.css';

function Button({
  label,
  onClick,
  disabled,
  backgroundColor,
  color,
  FunButton,
  width,
  height,
}) {
  const className = FunButton ? 'NormalButton FunButton' : 'NormalButton';
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
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
