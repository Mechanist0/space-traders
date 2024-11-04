import React from "react";
import { Col, Row } from "react-bootstrap";
import NavSidebar from "../Landing/NavSidebar";
import { useState } from "react";
import ReputationMoney from "../Landing/ReputationMoney";
import { useLocation } from "react-router";
import { Stage, Layer, Circle, Text } from "react-konva";
import { request } from "../../../Functions/Api";
import Ships from "../Ships/Ships";

function generateStellarObject(x, y, name) {
  return <></>;
}

// Get all the stellar objects from the server
// and generate them on the map

function stellarObjectParser(stellarObjectsJSON) {
  var objects = [];
  if (stellarObjectsJSON.waypoints) {
    for (var i = 0; i < stellarObjectsJSON.waypoints.length; i++) {
      objects.push({
        x: stellarObjectsJSON.waypoints[i].x + window.innerWidth / 2,
        y: stellarObjectsJSON.waypoints[i].y + window.innerHeight / 2,
        radius: 5,
        fill: "red",
      });
    }
  }
  return objects;
}

const Map = () => {
  const [stellarObjectsJSON, setStellarObjectsJSON] = useState([]);
  const [stellarObjects, setStellarObjects] = useState([]);
  let [ship, setShip] = useState("");
  let state = useLocation().state;

  const handleShipButton = (ship) => {
    setShip(ship);
    if (ship) {
      request({
        accessToken: state.accessToken,
        endpoint: "/systems/" + ship.nav.systemSymbol,
      })
        .then((response) => response.json())
        .then((json) => setStellarObjectsJSON(json.data))
        .catch((err) => console.log(err));
    }
    if (stellarObjectsJSON) {
      console.log(stellarObjectsJSON);
      setStellarObjects(stellarObjectParser(stellarObjectsJSON));
    }
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
              <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                  {stellarObjects &&
                    stellarObjects.length > 0 &&
                    stellarObjects.map((circle, index) => (
                      <Circle key={index} {...circle} />
                    ))}
                </Layer>
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
