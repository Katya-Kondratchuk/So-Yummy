import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={css.navCentre}>
      <NavLink
        exact
        to="/search"
        state={{ ingredient: true }}
        activeClassName={css.active}
      >
        Ingredients
      </NavLink>
      <NavLink exact to="/add" activeClassName={css.active}>
        Add recipes
      </NavLink>
      <NavLink exact to="/my" activeClassName={css.active}>
        My recipes
      </NavLink>
      <NavLink exact to="/favorite" activeClassName={css.active}>
        Favorite
      </NavLink>
      <NavLink exact to="/shopping-list" activeClassName={css.active}>
        Shopping list
      </NavLink>
    </nav>
  );
};

export default Nav;
