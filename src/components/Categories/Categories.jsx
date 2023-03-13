import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import DishCard from 'reusableComponents/DishCard/DishCard';
import Title from 'reusableComponents/Title/Title';
import s from './Categories.module.css';
import { getCategorieRecipes } from 'services/api/recipesAPI';

getCategorieRecipes('Breakfast');

const Categories = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab label="Beef" />
          <Tab label="Breakfast" />
          <Tab label="Chicken" />
          <Tab label="Desserts" />
          <Tab label="Goat" />
          <Tab label="Lamb" />
          <Tab label="Miscellaneous" />
          <Tab label="Pasta" />
          <Tab label="Pork" />
          <Tab label="Seafood" />
          <Tab label="Side" />
          <Tab label="Salads" />
          <Tab label="Soups" />
          <Tab label="Snacks" />
          <Tab label=" The drinks" />
          <Tab label="Vegan" />
          <Tab label="Vegeterian" />
          <Tab label="Starter" />
          <Tab label=" Any dishes" />
        </Tabs>
      </Box>

      <ul className={s.categoryList}>
        {arr.map((item, index) => (
          <li key={index} className={s.categoryItem}>
            <Link to="/recipe">
              <DishCard
                image="https://img.theculturetrip.com/wp-content/uploads/2019/12/2aaeed6.jpg"
                altText="someDish"
                text="Delicious dishes"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
