import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import css from './IngredientDescription.module.css';

const IngredientDescription = ({ name, description = '' }) => {
  let count;
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isDesktop = useMediaQuery('(min-width: 1440px)');

  count = 120;
  if (isMobile) {
    count = 60;
  }
  if (isDesktop) {
    count = 280;
  }

  const kitcut = (text, limit) => {
    if (text.length <= limit) return text;
    text = text.slice(0, limit);

    return `${text}...`;
  };

  let str = kitcut(description, count);

  const [text, setText] = useState(str);
  const handleMouseEnter = () => {
    setText(description);
  };

  const handleMouseLeave = () => {
    setText(
      description.length < count
        ? description
        : description.slice(0, count) + '...',
    );
  };

  return (
    <div className={css.wrapper}>
      <span className={css.name}>{name}</span>
      {description && !isMobile && (
        <span
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={css.description}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default IngredientDescription;
