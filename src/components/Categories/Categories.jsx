import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DishCard from 'reusableComponents/DishCard/DishCard';
import Title from 'reusableComponents/Title/Title';
import css from './Categories.module.css';
import { getAllCategories, getCategorieRecipes } from 'services/api/recipesAPI';

const Categories = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [recepiesCategory, setRecepiesCategory] = useState([]);

  const handleChange = (event, newValue) => {
    setCategory(newValue);
  };

  useEffect(() => {
    if (!category) {
      return;
    }
    getCategorieRecipes(category || []).then(data => setRecepiesCategory(data));
  }, [category]);

  useEffect(() => {
    const getAll = async () => {
      const all = (await getAllCategories()) || [];
      return all;
    };
    getAll().then(data => {
      setAllCategories(data);
      if (data.length > 0) {
        setCategory(data[0].title);
      }
    });
  }, []);

  return (
    allCategories.length !== 0 && (
      <div className="container greensImg">
        <Title text={'Categories'} />
        <Box
          sx={{
            maxWidth: '100%',
            marginTop: { xs: '50px', lg: '100px' },
            borderBottom: '1px solid #E0E0E0',
          }}
        >
          <Tabs
            value={category}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            {allCategories.map(({ title, _id }) => (
              <Tab key={_id} value={title} label={title} />
            ))}
          </Tabs>
        </Box>
        {recepiesCategory.length !== 0 && (
          <ul className={css.categoryList}>
            {recepiesCategory.map(({ _id, title, thumb }) => (
              <li key={_id} className={css.categoryItem}>
                <Link to={`/recipe/${_id}`}>
                  <DishCard image={thumb} altText={title} text={title} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  );
};

export default Categories;
