import React from 'react';
import { useState } from 'react';
import css from './Preview.module.css';
import Button from 'reusableComponents/Button/Button';
import DishCard from 'reusableComponents/DishCard/DishCard';
import { Link } from 'react-router-dom';

const Preview = ({ data }) => {
  const [mainMeals, setMainMeals] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const toogle = () => {
    setIsShow(prevState => !prevState);
  };

  return (
    <>
      <div className={`${css.previewContainer} ${'container'}`}>
        <Link
          to={`/categories/${
            data[0].charAt(0).toUpperCase() + data[0].slice(1)
          }`}
          className={css.title}
        >
          {data[0].charAt(0).toUpperCase() + data[0].slice(1)}
        </Link>
        <ul className={css.list}>
          {data[1].map(
            ({
              category,
              description,
              favorite,
              like,
              popularity,
              preview,
              time,
              title,
              _id,
            }) => (
              <li key={_id} className={css.item}>
                <DishCard
                  id={_id}
                  isShow={isShow}
                  toogle={toogle}
                  image={preview}
                  altText={description}
                  text={title}
                  favorite={favorite}
                  like={like}
                  allData={mainMeals}
                  setAllData={setMainMeals}
                  popularity={popularity}
                />
              </li>
            ),
          )}
        </ul>
      </div>
      <div className={`${css.buttonContainer} ${'container'}`}>
        <Button
          isLink
          href={`/categories/${
            data[0].charAt(0).toUpperCase() + data[0].slice(1)
          }`}
          divClassName={css.buttonClass}
          label={'See all'}
        />
      </div>
    </>
  );
};

export default Preview;
