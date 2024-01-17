import classes from "./MainNavigation.module.css"
import NavigationItem from "./NavigationItem";
import React from 'react';
import { Link } from 'react-router-dom';


const MainNavigation: React.FC = () => {
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
          <NavigationItem to="/Login">Login</NavigationItem>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default MainNavigation;
