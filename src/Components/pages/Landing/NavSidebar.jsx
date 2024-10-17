import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "../Styling/Sidebar.css";

const NavSidebar = () => {
  let state = useLocation().state;

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-12 col-sm-4 col-md-3 col-lg-2 bg-dark sidebar vh-100">
          <div className="position-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/" state={state} className="nav-link text-light">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contracts"
                  state={state}
                  className="nav-link text-light"
                >
                  Contracts
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavSidebar;
