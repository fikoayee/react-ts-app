import classes from "./MainNavigation.module.css"
import NavigationItem from "./NavigationItem";

const MainNavigation = () => {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
          <NavigationItem to="/">Home</NavigationItem>
          <NavigationItem to="/Posts">Posts</NavigationItem>
          <NavigationItem to="/ToDos">ToDos</NavigationItem>
          <NavigationItem to="/Users">Users</NavigationItem>
          <NavigationItem to="/Albums">Albums</NavigationItem>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default MainNavigation;
