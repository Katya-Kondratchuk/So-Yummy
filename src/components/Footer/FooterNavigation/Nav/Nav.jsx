import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={css.navCentre}>
      <NavLink to="/search" state={{ ingredient: true }}>
        Ingredients
      </NavLink>
      <NavLink to="/add">Add recipes</NavLink>
      <NavLink to="/my">My recipes</NavLink>
      <NavLink to="/favorite">Favorite</NavLink>
      <NavLink to="/shopping-list">Shopping list</NavLink>
    </nav>
  );
};

export default Nav;
