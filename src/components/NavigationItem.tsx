import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./MainNavigation.module.css"

interface Props {
  to: string;
  children: React.ReactNode;
}

const NavigationItem: React.FC<Props> = ({ to, children }) => {
  return (
    <li>
        <NavLink to={to} className={({isActive}) => (isActive ? classes.active : undefined)}>
            {children}
        </NavLink>
    </li>
  );
};

export default NavigationItem;