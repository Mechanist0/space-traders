import React from "react";

const ShipDetails = ({ ship }) => {
  return (
    <div>
      <strong>Ship Details:</strong>
      <div>
        <p>
          <strong>Registration Name:</strong> {ship.registration.name}
        </p>
        <p>
          <strong>Registration Role:</strong> {ship.registration.role}
        </p>
        <p>
          <strong>System Symbol:</strong> {ship.nav.systemSymbol}
        </p>
        <p>
          <strong>Departure Time:</strong> {ship.nav.route.departureTime}
        </p>
        <p>
          <strong>Arrival Time:</strong> {ship.nav.route.arrival}
        </p>
        <p>
          <strong>Status:</strong> {ship.nav.status}
        </p>
        <p>
          <strong>Cooldown:</strong> {ship.cooldown.remainingSeconds}
        </p>
      </div>
    </div>
  );
};

export default ShipDetails;
