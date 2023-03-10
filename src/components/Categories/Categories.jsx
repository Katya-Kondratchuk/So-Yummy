import React from 'react';
import DishCard from 'reusableComponents/DishCard/DishCard';
import Title from 'reusableComponents/Title/Title';
import s from './Categories.module.css';

const Categories = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const id = () => {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
  };

  return (
    <div className="container greensImg">
      <Title text={'Categories'} />
      <ul className={s.categoryList}>
        {arr.map(item => (
          <li key={id()} className={s.categoryItem}>
            <DishCard
              image="https://img.theculturetrip.com/wp-content/uploads/2019/12/2aaeed6.jpg"
              altText="someDish"
              text="Delicious dishes"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
