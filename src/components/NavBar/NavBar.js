import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
 
const NavBar = () => {
  return (
    <nav>
      <NavLink 
        exact to="/"
        className='nav-title'
        activeClassName='selected-title'
      >
        Find Match 
      </NavLink>
      <NavLink
       exact to="/matches"
       className='nav-title'
       activeClassName='selected-title'
       >
         Your Matches
      </NavLink>
    </nav>
  )
}

export default NavBar;