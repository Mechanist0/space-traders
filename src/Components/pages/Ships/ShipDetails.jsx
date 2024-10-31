import React from "react";

const ShipDetails = ({ ship }) => {
  return (
    <div>
      <p>{ship.symbol}</p>
      <p>Registration</p>
      <ul>
        <li> {ship.registration.name}</li>
        <li> {ship.registration.role}</li>
      </ul>
      <p>Location</p>
      <ul>
        <li> {ship.nav.waypointSymbol}</li>
      </ul>
    </div>
  );
};

export default ShipDetails;
