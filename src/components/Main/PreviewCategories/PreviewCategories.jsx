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

// вставить в index.css
// .greensImg {
//   background-image: url(./assets/images/GreensBcg/kisspng-pasta-spinach-dip-english-muffin-breakfast-sandwic-spinach-5abcc32f2ee473\ 1.png);
//   background-repeat: no-repeat;
//   background-position: left 0 bottom -163px;
//   background-size: 256px 392px;
// }

// @media screen and (min-width: 768px) {
//   .greensImg {
//     background-position: left 0 bottom -275px;
//     background-size: 423px 646px;
//   }
// }
// @media screen and (min-width: 1440px) {
//   .greensImg {
//     background-position: left 0 bottom -413px;
//     background-size: 558px 852px;
//   }
// }
