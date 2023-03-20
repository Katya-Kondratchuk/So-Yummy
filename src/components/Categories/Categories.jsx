import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import BGDots from 'reusableComponents/BGDots/BGDots';
import Loader from '../../reusableComponents/ContentLoader/CategoriesLoader';
import DishCard from 'reusableComponents/DishCard/DishCard';
import Title from 'reusableComponents/Title/Title';
import { getAllCategories, getCategorieRecipes } from 'services/api/recipesAPI';
import css from './Categories.module.css';
import BasicPagination from 'reusableComponents/Pagination/Pagination';

const Categories = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [recepiesCategory, setRecepiesCategory] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [totalPage, setTotalPage] = useState(null);
  const [page, setPage] = useState(1);
  const { categoryName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const isFirst = useRef(true);

  const mobile = useMediaQuery('(max-width: 767px)');
  const tablet = useMediaQuery('(max-width: 1439px)');
  const desctop = useMediaQuery('(min-width: 1440px)');

  const toogle = () => {
    setIsShow(prevState => !prevState);
  };

  const handleChange = (event, newValue) => {
    setCategory(newValue);
  };

  useEffect(() => {
    setIsLoading(true);
    if (!category) {
      setIsLoading(false);
      return;
    }
    if (isFirst.current && category === 'Beef' && categoryName) {
      setCategory(categoryName);
      isFirst.current = false;
    }

    getCategorieRecipes(category || '', page, 8).then(({ recipes, total }) => {
      setRecepiesCategory(recipes);
      const pageCounts = Math.ceil(total / 8);
      if (pageCounts > 1) {
        setTotalPage(pageCounts);
      }
    });
    setIsLoading(false);
  }, [category, categoryName, page]);

  useEffect(() => {
    getAllCategories()
      .then(data => {
        setAllCategories(data);
        if (data.length > 0) {
          setCategory(data[0].title);
        }
      })
      .catch(error => console.log(error.message));
  }, []);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <div className="container ">
        <BGDots />
        <Title text={'Categories'} />
        <Box
          sx={{
            maxWidth: '100%',
            marginTop: { xs: '50px', lg: '100px' },
            borderBottom: '1px solid #E0E0E0',
            minHeight: '48px',
          }}
        >
          <Tabs
            value={category}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
            sx={{
              '.MuiTabs-indicator': {
                backgroundColor: '#8BAA36',
              },
            }}
          >
            {allCategories.map(({ title, _id }) => (
              <Tab
                sx={{
                  '&.Mui-selected': {
                    color: '#8BAA36',
                  },
                }}
                key={_id}
                value={title}
                label={title}
              />
            ))}
          </Tabs>
        </Box>
        {isLoading || recepiesCategory.length === 0 ? (
          (desctop && (
            <>
              <div className={css.loader}>
                <Loader.Desktop />
              </div>
              <Loader.Desktop />
            </>
          )) ||
          (tablet && (
            <>
              <Loader.Tablet />
              <Loader.Tablet />
              <Loader.Tablet />
              <Loader.Tablet />
            </>
          )) ||
          (mobile && <Loader.Mobile />)
        ) : (
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
                    popularity={popularity}
                  />
                </li>
              ),
            )}
          </ul>
        )}
      </div>
      {totalPage && (
        <div className={css.pagination}>
          <BasicPagination
            count={totalPage}
            page={page}
            isChange={handleChangePage}
          />
        </div>
      )}
    </div>
  );
};

export default Categories;
