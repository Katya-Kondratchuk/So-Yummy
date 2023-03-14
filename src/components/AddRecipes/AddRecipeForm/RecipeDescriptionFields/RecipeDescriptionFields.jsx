import SelectList from 'reusableComponents/SelectList';
import PropTypes from 'prop-types';
import css from './RecipeDescriptionFields.module.css';
import ImgWithPreview from './ImgWithPreview';

const RecipeDescriptionFields = ({
  allCategory,
  allTime,
  image: { imgAdd, setImgAdd },
  name: { nameRecipe, setNameRecipe },
  descriptionData: { description, setDescription },
  categoryData: { category, setCategory },
  time: { cookingTime, setCookingTime },
}) => {
  return (
    <div className={css.wrapperInfo}>
      <ImgWithPreview imgAdd={imgAdd} setImgAdd={setImgAdd} />

      <div className={css.descriptions}>
        <input
          type="text"
          name="name"
          autoComplete="off"
          value={nameRecipe}
          placeholder="Enter item title"
          onChange={e => setNameRecipe(e.target.value)}
          className={css.nameRecipe}
        />

        <input
          type="text"
          name="description"
          autoComplete="off"
          placeholder="Enter about recipe"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className={css.description}
        />

        <div className={css.wrapperCategory}>
          <input
            type="text"
            readOnly="readonly"
            placeholder="Category"
            className={css.category}
          />

          <SelectList
            list={allCategory}
            option={category}
            setOption={setCategory}
            selectedOption={css.selectCategory}
            selectContent={css.selectContentCategory}
            scrollbar={css.scrollbar}
            activeItemClass={css.activeItem}
            wrapperOption={css.wrapperOption}
          />
        </div>

        <div className={css.wrapperCookingTime}>
          <input
            type="text"
            placeholder="Cooking time"
            className={css.cookingTime}
          />

          <SelectList
            list={allTime}
            option={cookingTime}
            setOption={setCookingTime}
            selectedOption={css.selectTime}
            selectContent={css.selectContentTime}
            scrollbar={css.scrollbar}
            activeItemClass={css.activeItem}
            wrapperOption={css.wrapperOption}
          />
        </div>
      </div>
    </div>
  );
};

RecipeDescriptionFields.propTypes = {
  allCategory: PropTypes.array,
  allTime: PropTypes.array,
  imgAdd: PropTypes.string,
  setImgAdd: PropTypes.func,
  nameRecipe: PropTypes.string,
  setNameRecipe: PropTypes.func,
  description: PropTypes.string,
  setDescription: PropTypes.func,
  category: PropTypes.string,
  setCategory: PropTypes.func,
  cookingTime: PropTypes.string,
  setCookingTime: PropTypes.func,
};

export default RecipeDescriptionFields;
