import React from "react";
import { useLocation, useNavigate } from "react-router";
import NavSidebar from "./NavSidebar";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import ReputationMoney from "./ReputationMoney";
import Ships from "../Ships/Ships";
import ShipDetails from "../Ships/ShipDetails";

function Landing() {
  let state = useLocation().state;
  let [ship, setShip] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (state === null || state === undefined) {
      navigate("/login");
    }
  });

  const handleShipButton = (ship) => {
    setShip(ship);
  };

  return (
    <div>
      {state && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            height: "100vh",
            maxHeight: "100vh",
          }}
        >
          {/* Sidebar */}
          <Col style={{ flexGrow: 1 }} className="bg-dark p-3">
            <h5 className="d-flex justify-content-center text-white">
              Space Traders
            </h5>
            <NavSidebar state={state} />
          </Col>

          <div class="vr"></div>

          {/* Ships */}
          <Col
            style={{ flexGrow: 1, flexDirection: "column" }}
            className="bg-dark p-3 text-white justify-content-center"
          >
            <h2>Ships</h2>
            <Ships state={state} shipButtonInfo={handleShipButton} />
          </Col>

          {/* Main Content */}
          <Col style={{ flexGrow: 5 }}>
            <main className="ps-5">
              <h1>Welcome to Space Traders!</h1>
              {ship && <ShipDetails ship={ship} />}
            </main>
          </Col>

          {/* Ship and Agent Details */}
          <Col
            style={{ flexGrow: 2, flexDirection: "column" }}
            className="d-flex bg-dark text-white"
          >
            <Row>
              <h2 className="p-2 d-flex justify-content-center">
                Player Details
              </h2>
              <ReputationMoney />
            </Row>
            <Row>
              <h2 className="p-2 d-flex justify-content-center">
                Agent Details
              </h2>
            </Row>
          </Col>
        </div>
      )}
    </div>
  );
}

export default Landing;
