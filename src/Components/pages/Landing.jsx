import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const Landing = () => {
  let agent = useLocation().state;
  return (
    // Contracts
    <Link to="/contracts" state={agent}>
      Contracts
    </Link>
    // Moving

    // Ships

    // Mining

    // Selling/Buying
  );
};

export default Landing;
