import React from 'react';
import BasicPagination from 'reusableComponents/Pagination/Pagination';
import RecipeCard from 'reusableComponents/RecipeCard/RecipeCard';
import Title from 'reusableComponents/Title/Title';
import dish from '../../assets/images/Recipe/image.png';
import dish1 from '../../assets/images/Recipe/image2.png';
import dish2 from '../../assets/images/Recipe/image3.png';
import dish3 from '../../assets/images/Recipe/image4.png';
import dishesData from './DatsTest.json';

const dishesImages = [dish, dish1, dish2, dish3];

const Favorite = dishes => {
  dishes = dishesData;
  let acc = -1;
  return (
    <div className={'container'}>
      <section>
        <Title text="Favorites" />
        <ul>
          {dishes.map(({ title, description, description2, time }) => {
            acc += 1;
            return (
              <RecipeCard
                key={title}
                trashClass={'lightBcg'}
                title={title}
                time={time}
                text={description}
                text2={description2}
                imgComponent={dishesImages[acc]}
              />
            );
          })}
        </ul>
        <BasicPagination count={8} />
      </section>
    </div>
  );
};

export default Favorite;
