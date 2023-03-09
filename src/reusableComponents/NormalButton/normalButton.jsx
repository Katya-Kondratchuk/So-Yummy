import React from 'react';
import './normalButton.css';

function NormalButton({
  width,
  height,
  backgroundColor,
  color,
  label,
  onClick,
  disabled,
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="NormalButton"
      style={{ width, height, backgroundColor, color }}
    >
      {label}
    </button>
  );
}

export default NormalButton;
