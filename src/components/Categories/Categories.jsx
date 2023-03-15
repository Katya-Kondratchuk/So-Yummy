import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BGDots from 'reusableComponents/BGDots/BGDots';
import DishCard from 'reusableComponents/DishCard/DishCard';
import Title from 'reusableComponents/Title/Title';
import { getAllCategories, getCategorieRecipes } from 'services/api/recipesAPI';
import css from './Categories.module.css';

// <Link to={`/categories/${category}`} className={css.title}>
//   {category}
// </Link>;

const Categories = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [recepiesCategory, setRecepiesCategory] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const { categoryName } = useParams();

  const toogle = () => {
    setIsShow(prevState => !prevState);
  };

  const handleChange = (event, newValue) => {
    setCategory(newValue);
  };

  useEffect(() => {
    if (!category) {
      return;
    }

    if (categoryName) {
      setCategory(categoryName);
    }

    getCategorieRecipes(category || []).then(data => setRecepiesCategory(data));
  }, [category, categoryName]);

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
      <div className=" greensImg">
        <div className="container ">
          <BGDots />
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
              {recepiesCategory.map(
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
                  <li key={_id} className={css.categoryItem}>
                    <DishCard
                      id={_id}
                      isShow={isShow}
                      toogle={toogle}
                      image={preview}
                      altText={title}
                      text={title}
                      favorite={favorite}
                      like={like}
                      allData={recepiesCategory}
                      setAllData={setRecepiesCategory}
                    />
                  </li>
                ),
              )}
            </ul>
          )}
        </div>
      </div>
    )
  );
};

export default Categories;
