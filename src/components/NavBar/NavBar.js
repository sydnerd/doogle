import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
 
const NavBar = () => {
  return (
    <nav>
      <NavLink exact to="/">Find your Match </NavLink>
      <NavLink exact to="/matches">Matches</NavLink>
    </nav>
  )
}

export default NavBar;