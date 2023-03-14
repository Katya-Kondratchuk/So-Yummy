// import React from 'react';
// import css from './CheckBoxRecipe.module.css';

// const CheckBoxRecipe = ({ id }) => {
//   return (
//     <div className={css.wrapper}>
//       <input className={css.input} type={'checkbox'} id={id} />
//       <label className={css.label} htmlFor={id}></label>
//     </div>
//   );
// };

// export default CheckBoxRecipe;
import React from 'react';
import css from './CheckBoxRecipe.module.css';

const CheckBoxRecipe = ({ id }) => {
  return (
    <div className={css.wrapper}>
      <input className={css.input} type={'checkbox'} id={id} />
      <label className={css.label} htmlFor={id}></label>
    </div>
  );
};

export default CheckBoxRecipe;
