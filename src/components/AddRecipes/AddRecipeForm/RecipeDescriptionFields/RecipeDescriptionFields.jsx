import SelectList from 'reusableComponents/SelectList';
import css from './RecipeDescriptionFields.module.css';
import ImgWithPreview from './ImgWithPreview';
import { allTime } from 'data/dataForAddRecipeForm';

const RecipeDescriptionFields = ({
  allCategory,
  image: { fullImage, setFullImage },
  name: { title, setTitle },
  descriptionData: { description, setDescription },
  categoryData: { category, setCategory },
  cokingTime: { time, setTime },
}) => {
  return (
    <div className={css.wrapperInfo}>
      <ImgWithPreview imgAdd={fullImage} setImgAdd={setFullImage} />

      <div className={css.descriptions}>
        <input
          type="text"
          name="title"
          autoComplete="off"
          value={title}
          placeholder="Enter item title"
          onChange={e => setTitle(e.target.value)}
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

RecipeDescriptionFields.propTypes = {};

export default RecipeDescriptionFields;
