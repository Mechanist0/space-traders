import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavSidebar = () => {
  let state = useLocation().state;

  return (
    <nav>
      {/* Sidebar */}
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/landing" state={state}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contracts" state={state}>
            Contracts
          </Link>
        </li>
        <li>
          <Link to="/map" state={state}>
            Map
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavSidebar;
