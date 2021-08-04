import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
 
const NavBar = () => {
  return (
    <nav>
      <NavLink exact to="/">Choose By Group</NavLink>
      <NavLink exact to="/favorites">Favorite Breeds</NavLink>
    </nav>
  )
}

export default NavBar;