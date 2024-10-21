import React from "react";
import { useLocation, useNavigate } from "react-router";
import NavSidebar from "./NavSidebar";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ReputationMoney from "./ReputationMoney";

function Landing() {
  let state = useLocation().state;

  const navigate = useNavigate();
  useEffect(() => {
    if (state === null || state === undefined) {
      navigate("/login");
    }
  });

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
          <Col style={{ width: "100px" }} className="bg-dark p-3">
            <NavSidebar state={state} />
          </Col>

          {/* Ships */}
          <Col
            style={{ width: "100px", flexDirection: "column" }}
            className="bg-dark p-3 text-white justify-content-center"
          >
            <h2>Ships</h2>
          </Col>

          {/* Main Content */}
          <Col style={{ flexGrow: 10 }}>
            <main className="ps-5">
              <h1>Welcome to Space Traders!</h1>
            </main>
          </Col>

          {/* Ship and Agent Details */}
          <Col
            style={{ flexGrow: 3, flexDirection: "column" }}
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
