import React from 'react';
import PropTypes from 'prop-types';
import s from './RecipeDescriptionFields.module.css';

import { ReactComponent as Icon } from 'assets/images/AddRecipe/input-img.svg';

function previewFile(e) {
  var preview = e.currentTarget;
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = '';
  }
}

const RecipeDescriptionFields = props => {
  return (
    <div>
      <div className={s.wrapperImg}>
        <input
          type="file"
          onChange={e => previewFile(e)}
          className={s.imgInput}
        />
        {/* <div className={s.icon}> */}
        <Icon width="64" height="64" className={s.icon} />
        {/* </div> */}
      </div>
    </div>
  );
};

RecipeDescriptionFields.propTypes = {};

export default RecipeDescriptionFields;
