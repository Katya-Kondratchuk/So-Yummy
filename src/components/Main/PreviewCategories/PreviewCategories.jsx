import { Link } from 'react-router-dom';
import SuperBtn from 'reusableComponents/SuperBtn/SuperBtn';
import Preview from './Preview/Preview';
import css from './PreviewCategories.module.css';
import React, { useEffect, useState } from 'react';
import { getMainPage } from '../../../services/api/recipesAPI';
import MainLoader from 'reusableComponents/ContentLoader/MainCategoryLoader';
import { useMediaQuery } from '@mui/material';

const PreviewCategories = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const mobile = useMediaQuery('(max-width: 767px)');
  const tablet = useMediaQuery('(min-width: 768px)');
  const desktop = useMediaQuery('(min-width: 1440px)');

  useEffect(() => {
    setIsLoading(true);
    getMainPage().then(data => {
      const dishArray = Object.entries(data);
      setAllCategories(dishArray);
      setIsLoading(false);
    });
  }, []);
  return (
    <div className={`${css.sectionWrapper} `}>
      {isLoading
        ? (desktop && (
            <>
              <MainLoader.Desktop />
              <MainLoader.Desktop />
              <MainLoader.Desktop />
              <MainLoader.Desktop />
            </>
          )) ||
          (tablet && (
            <>
              <MainLoader.Tablet />
              <MainLoader.Tablet />
              <MainLoader.Tablet />
              <MainLoader.Tablet />
            </>
          )) ||
          (mobile && (
            <>
              <MainLoader.Mobile />
              <MainLoader.Mobile />
              <MainLoader.Mobile />
              <MainLoader.Mobile />
            </>
          ))
        : allCategories.map((item, index) => (
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
