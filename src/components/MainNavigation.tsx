import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css"

const MainNavigation = () => {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink to="/" className={({isActive}) => (isActive ? classes.active : undefined)} end>Home</NavLink>
            </li>
            <li>
              <NavLink to="/Posts" className={({isActive}) => (isActive ? classes.active : undefined)}>Posts</NavLink>
            </li>
            <li>
              <NavLink to="/ToDos" className={({isActive}) => (isActive ? classes.active : undefined)}>ToDos</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default MainNavigation;
