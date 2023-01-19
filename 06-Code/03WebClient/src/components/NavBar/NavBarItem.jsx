/* Author: Steven Jaramillo*/

import { NavLink } from "react-router-dom";

const NavBatItem = ({ title, option1, option2, href }) => {
  return (
    <li className="nav-item dropdown">
      <NavLink
        className="nav-link dropdown-toggle"
        to="/login"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </NavLink>
      <div className="dropdown-menu dropdown-menu-dark">
        <NavLink className="dropdown-item" to={`/${href}/list`}>
          {option1}
        </NavLink>
        <NavLink className="dropdown-item" to={`/${href}/add`}>
          {option2}
        </NavLink>
      </div>
    </li>
  );
};

export default NavBatItem;
