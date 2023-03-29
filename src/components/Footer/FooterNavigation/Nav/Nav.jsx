import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={css.navCentre}>
      <NavLink to="/search" className="linkFooter" state={{ ingredient: true }}>
        Ingredients
      </NavLink>
      <NavLink to="/add" className="linkFooter">
        Add recipes
      </NavLink>
      <NavLink to="/my" className="linkFooter">
        My recipes
      </NavLink>
      <NavLink to="/favorite" className="linkFooter">
        Favorites
      </NavLink>
      <NavLink to="/shopping-list" className="linkFooter">
        Shopping list
      </NavLink>
    </nav>
  );
};

export default Nav;
