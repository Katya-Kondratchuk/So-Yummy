import { useRef, useState } from 'react';
import { ReactComponent as Icon } from 'assets/images/AddRecipe/input-img.svg';
import s from './RecipeDescriptionFields.module.css';
import SelectList from 'components/AddRecipes/SelectList';
// import PropTypes from 'prop-types';

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

const allCategory = [
  'Beef',
  'Breakfast',
  'Chicken',
  'Dessert',
  'Goat',
  'Lamb',
  'Miscellaneous',
  'Pasta',
  'Pork',
  'Seafood',
  'Side',
  'Starter',
  'Vegan',
  'Vegetarian',
];

const time = [
  '5 min',
  '10 min',
  '15 min',
  '20 min',
  '25 min',
  '30 min',
  '35 min',
  '40 min',
  '45 min',
  '50 min',
  '55 min',
  '60 min',
  '65 min',
  '70 min',
  '75 min',
  '80 min',
  '85 min',
  '90 min',
  '95 min',
  '100 min',
  '105 min',
  '110 min',
  '115 min',
  '120 min',
];

const RecipeDescriptionFields = () => {
  const inputEl = useRef(null);

  // const [allCategory, setAllCategory] = useState();

  const [imgAdd, setImgAdd] = useState('');
  const [nameRecipe, setNameRecipe] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Beef');
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
        <input
          type="text"
          name="name"
          value={nameRecipe}
          placeholder="Enter item title"
          onChange={e => setNameRecipe(e.target.value)}
          className={s.nameRecipe}
        />

        <input
          type="text"
          name="description"
          placeholder="Enter about recipe"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className={s.description}
        />

        <div className={s.wrapperCategory}>
          <input
            type="text"
            readOnly="readonly"
            placeholder="Category"
            className={s.category}
          />
          {/* <div
            className={s.selectCategory}
            onClick={e => setIsActive(!isActive)}
          >
            <span>{category} </span>
            <span className={s.arrow}>
              <Arrow width="12px" height="7px" />
            </span>
          </div>
          {isActive && (
            <ul className={`${s.selectContentCategory} ${s.scrollbarCategory}`}>
              {allCategory.map(value => (
                <li
                  key={value}
                  onClick={e => {
                    setCategory(value);
                    setIsActive(false);
                  }}
                  className={s.selectItem}
                >
                  {value}
                </li>
              ))}
            </ul>
          )} */}

          <SelectList
            list={allCategory}
            option={category}
            selectedOption={s.selectCategory}
            selectContent={s.selectContentCategory}
            scrollbar={s.scrollbar}
            setValue={setCategory}
          />
        </div>

        <div className={s.wrapperCookingTime}>
          <input
            type="text"
            placeholder="Cooking time"
            className={s.cookingTime}
          />

          <SelectList
            list={time}
            option={cookingTime}
            selectedOption={s.selectCategory}
            selectContent={s.selectContentCategory}
            scrollbar={s.scrollbar}
            setValue={setCookingTime}
          />
        </div>
      </div>
    </div>
  );
};

RecipeDescriptionFields.propTypes = {};

export default RecipeDescriptionFields;
