import { Link } from 'react-router-dom';
import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';
import Preview from './Preview/Preview';
import css from './PreviewCategories.module.css';

const PreviewCategories = () => {
  return (
    <div className={`${css.sectionWrapper} `}>
      <Preview category={'Breakfast'} />
      <Preview category={'Miscellaneous'} />
      <Preview category={'Vegan'} />
      <Preview category={'Dessert'} />
      <div className={`${css.buttonContainer} ${'container'}`}>
        <div className={css.buttonWrapper}>
          <Link to="/categories">
            <SuperBtn title="Other catagories" otln typeBtn="submit" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreviewCategories;
