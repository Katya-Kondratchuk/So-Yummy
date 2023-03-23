import { Link } from 'react-router-dom';
import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';
import Preview from './Preview/Preview';
import css from './PreviewCategories.module.css';
import React, { useEffect, useState } from 'react';
import { getMainPage } from '../../../services/api/recipesAPI';

const PreviewCategories = () => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    getMainPage().then(data => {
      const dishArray = Object.entries(data);
      setAllCategories(dishArray);
    });
  }, []);
  return (
    <div className={`${css.sectionWrapper} `}>
      {allCategories.map((item, index) => (
        <Preview key={index} data={item} />
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
