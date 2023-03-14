// import React from 'react';
// import css from './IngredientDescription.module.css';

// const IngredientDescription = ({ name, description = '' }) => {
//   return (
//     <div className={css.wrapper}>
//       <span className={css.name}>{name}</span>
//       {description && <span className={css.description}>{description}</span>}
//     </div>
//   );
// };

// export default IngredientDescription;
import React from 'react';
import css from './IngredientDescription.module.css';

const IngredientDescription = ({ name, description = '' }) => {
  return (
    <div className={css.wrapper}>
      <span className={css.name}>{name}</span>
      {description && <span className={css.description}>{description}</span>}
    </div>
  );
};

export default IngredientDescription;
