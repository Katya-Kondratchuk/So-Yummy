import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './PopularRecipe.module.css';

const recipeMokk = [
  {
    img: 'https://www.themealdb.com/images/ingredients/Lime-Small.png',
    title: 'Banana Pancakes',
    text: 'In a bowl, mash the banana with a fork until it resembles a thick purée...',
  },
  {
    img: 'https://www.themealdb.com/images/ingredients/Lime-Small.png',
    title: 'Squash linguine',
    text: 'Pasta is a type of food typically made from an unleavened dough of wheat flour...',
  },
  {
    img: 'https://www.themealdb.com/images/ingredients/Lime-Small.png',
    title: 'Baked salmon',
    text: 'Cook in boiling salted water for 10 mins...',
  },
  {
    img: 'https://www.themealdb.com/images/ingredients/Lime-Small.png',
    title: 'Sugar Pie',
    text: 'Sugar pie is a dessert in northern French and  Belgiancuisine, where it is called tarte...',
  },
];

const PopularRecipe = props => {
  const [recipe, setRecipe] = useState(recipeMokk);

  //TODO: обработать длину title (itemTitle) на разных брекпоинтах и добавить ...

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Popular recipe</h3>
      <ul className={s.list}>
        {recipe.slice(0, 4).map(({ img, title, text }) => (
          <li key={text} className={s.item}>
            <Link to="/recipe" className={s.itemLink}>
              <div className={s.imgWrapper}>
                <img src={img} alt={title} />
              </div>
              <div className={s.textWrapper}>
                <h4 className={s.itemTitle}>{title}</h4>
                <p className={s.description}>{text}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

PopularRecipe.propTypes = {};

export default PopularRecipe;
