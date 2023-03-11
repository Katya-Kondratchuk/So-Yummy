import { useRef, useState } from 'react';
import { ReactComponent as Icon } from 'assets/images/AddRecipe/input-img.svg';
import PropTypes from 'prop-types';
import s from './RecipeDescriptionFields.module.css';

function previewFile(inputEl) {
  const preview = inputEl.current;
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  };

  if (file) {
    preview.style.opacity = 1;
    reader.readAsDataURL(file);
  } else {
    preview.style.opacity = 1;
    preview.src = '';
  }
}

const RecipeDescriptionFields = ({}) => {
  const inputEl = useRef(null);

  const [allCategory, setAllCategory] = useState([]);

  const [imgAdd, setImgAdd] = useState('');
  const [nameRecipe, setNameRecipe] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  return (
    <div className={s.wrapperInfo}>
      <div className={s.wrapperImg}>
        <input
          type="file"
          onChange={e => {
            setImgAdd(e.target.value);
            previewFile(inputEl);
          }}
          className={s.imgInput}
          value={imgAdd}
        />

        <Icon width="64" height="64" className={s.icon} />

        <img
          src=""
          alt="prew show img for add recipe"
          className={`${s.showImg}`}
          ref={inputEl}
        />
      </div>
      <div className={s.descriptions}>
        <label htmlFor="">Enter item title</label>
        <input
          type="text"
          name="name"
          value={nameRecipe}
          onChange={e => setNameRecipe(e.target.value)}
        />
        <br />
        <label htmlFor="">Enter about recipe</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <br />
        <label htmlFor="">Category</label>
        <input type="text" />
        <br />
        <label htmlFor="">Cooking time</label>
        <input type="text" />
      </div>
    </div>
  );
};

RecipeDescriptionFields.propTypes = {};

export default RecipeDescriptionFields;
