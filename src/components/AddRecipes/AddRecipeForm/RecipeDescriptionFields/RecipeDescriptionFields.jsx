import SelectList from 'reusableComponents/SelectList';
import css from './RecipeDescriptionFields.module.css';
import ImgWithPreview from './ImgWithPreview';
import { allTime } from 'data/dataForAddRecipeForm';
import PropTypes from 'prop-types';

const RecipeDescriptionFields = ({
  allCategory,
  image: { fullImage, setFullImage },
  name: { title, setTitle },
  descriptionData: { description, setDescription },
  categoryData: { category, setCategory },
  cokingTime: { time, setTime },
  formErrors = {},
}) => {
  return (
    <div className={css.wrapperInfo}>
      <div className={css.wrapperImgForError}>
        <ImgWithPreview imgAdd={fullImage} setImgAdd={setFullImage} />
        {formErrors?.fullImage && (
          <p className={css.errorMessageImg}>{formErrors?.fullImage}</p>
        )}
      </div>

      <div className={css.descriptions}>
        <div className={css.wrapperErrMessTitle}>
          <input
            type="text"
            name="title"
            autoComplete="off"
            value={title}
            placeholder="Enter item title"
            onChange={e => setTitle(e.target.value)}
            className={css.nameRecipe}
          />
          {formErrors?.title && (
            <p className={css.errorMessage}>{formErrors?.title}</p>
          )}
        </div>

        <div className={css.wrapperErrMessDescr}>
          <input
            type="text"
            name="description"
            autoComplete="off"
            placeholder="Enter about recipe"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className={css.description}
          />
          {formErrors?.description && (
            <p className={css.errorMessage}>{formErrors?.description}</p>
          )}
        </div>

        <div className={css.wrapperCategory}>
          <input
            type="text"
            readOnly="readonly"
            placeholder="Category"
            className={css.category}
          />
          {formErrors?.category && (
            <p className={css.errorMessage}>{formErrors?.category}</p>
          )}

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
          {formErrors?.time && (
            <p className={css.errorMessage}>{formErrors?.time}</p>
          )}

          <SelectList
            list={allTime}
            option={time}
            setOption={setTime}
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
  fullImage: PropTypes.any,
  setFullImage: PropTypes.func,
  title: PropTypes.string,
  setTitle: PropTypes.func,
  description: PropTypes.string,
  setDescription: PropTypes.func,
  category: PropTypes.string,
  setCategory: PropTypes.func,
  time: PropTypes.string,
  setTime: PropTypes.func,
  formErrors: PropTypes.object,
};

export default RecipeDescriptionFields;
