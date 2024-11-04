import React from "react";
import { Col, Row } from "react-bootstrap";
import NavSidebar from "../Landing/NavSidebar";
import { useEffect, useState } from "react";
import ReputationMoney from "../Landing/ReputationMoney";
import { useLocation } from "react-router";
import { Stage, Layer, Circle, Text } from "react-konva";
import { request } from "../../../Functions/Api";
import { useParams } from "react-router";
import Ships from "../Ships/Ships";

function generateStellarObject(x, y, name) {
  return (
    <Circle x={x} y={y} radius={20} fill="#89b717" opacity={0.8} draggable />
  );
}

// Get all the stellar objects from the server
// and generate them on the map

function stellarObjectParser(stellarObjectsJSON) {
  console.log(stellarObjectsJSON);
}

const Map = () => {
  const [stellarObjects, setStellarObjects] = useState([]);
  let [ship, setShip] = useState("");
  let state = useLocation().state;

  const handleShipButton = (ship) => {
    console.log("Updating ship...\n Ship:" + ship);
    setShip(ship);
    request({
      accessToken: state.accessToken,
      endpoint: "/systems/" + ship.nav.systemSymbol,
    })
      .then((response) => response.json())
      .then((json) => setStellarObjects(json.data))
      .catch((err) => console.log(err));
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
              <h2>Map</h2>
              {stellarObjectParser(stellarObjects)}
              <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>{stellarObjects.at(0)}</Layer>
              </Stage>
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
};

export default Map;
