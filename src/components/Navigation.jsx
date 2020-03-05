import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav id="navigation">
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/add">Add Book</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;