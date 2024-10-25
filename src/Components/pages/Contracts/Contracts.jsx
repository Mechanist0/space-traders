import React from "react";
import ContractDetails from "./ContractDetails";
import { useLocation } from "react-router";
import NavSidebar from "../Landing/NavSidebar";
import ReputationMoney from "../Landing/ReputationMoney";
import { useState, useEffect } from "react";
import { request } from "../../../Functions/Api";
import { Col, Row } from "react-bootstrap";

const Contracts = () => {
  let state = useLocation().state;
  let [contracts, setContracts] = useState({});
  const [ship, setShip] = useState("");

  useEffect(() => {
    request({
      accessToken: state.accessToken,
      endpoint: "/my/contracts",
    })
      .then((response) => response.json())
      .then((json) => setContracts(json.data))
      .catch((err) => console.log(err));
  }, [state.accessToken]);

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

          {/* Main Content */}
          <Col style={{ flexGrow: 5 }}>
            {contracts[0] && <ContractDetails contract={contracts[0]} />}
            {console.log(contracts)}
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

export default Contracts;
