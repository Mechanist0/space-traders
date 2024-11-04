import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";

const ShipDetails = ({ ship }) => {
  let state = useLocation().state;
  let navigate = useNavigate();

  const openMap = () => {
    navigate("/map", { state, systemSymbol: ship.nav.systemSymbol });
  };

  return (
    <div>
      <p>{ship.symbol}</p>
      <p>Registration</p>
      <ul>
        <li> {ship.registration.name}</li>
        <li> {ship.registration.role}</li>
      </ul>
      <p>Location</p>
      <li> {state.systemSymbol} </li>
      <Link to="/map" state={state}>
        View on Map
      </Link>
      <Button onClick={openMap}>Back</Button>
    </div>
  );
};

export default ShipDetails;
