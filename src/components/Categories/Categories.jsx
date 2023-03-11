import React from 'react';
import { Link } from 'react-router-dom';
import DishCard from 'reusableComponents/DishCard/DishCard';
import Title from 'reusableComponents/Title/Title';
import s from './Categories.module.css';

const Categories = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="container greensImg">
      <Title text={'Categories'} />
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
