import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "../Styling/Sidebar.css";

const NavSidebar = () => {
  let state = useLocation().state;

  return (
    <div>
      {/* Sidebar */}
      <nav className="col-md-3 col-lg-2 d-md-block bg-dark sidebar">
        <div className="position-sticky">
          <ul className="nav flex-column">
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
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavSidebar;
