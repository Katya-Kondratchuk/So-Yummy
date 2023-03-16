import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';
import Preview from './Preview/Preview';
import css from './PreviewCategories.module.css';
import { getAllCategories } from '../../../services/api/recipesAPI';

const PreviewCategories = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then(data => {
      setAllCategories(data.slice(0, 4));
    });
  }, []);

  return (
    <div className={`${css.sectionWrapper}  ${'greensImg'}`}>
      {allCategories.map(({ title, _id }) => (
        <Preview key={_id} category={title} />
      ))}
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
