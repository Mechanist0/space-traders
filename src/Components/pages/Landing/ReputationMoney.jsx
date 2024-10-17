import React from "react";
import { useLocation } from "react-router";
import { request } from "../../../Functions/Api";
import { useState, useEffect } from "react";
import ContractDetails from "../Contracts/ContractDetails"; // Import ContractDetails component

const ReputationMoney = () => {
  const [details, setDetails] = useState("");
  const [contracts, setContracts] = useState("");
  let state = useLocation().state;

  useEffect(() => {
    request({
      accessToken: state.accessToken,
      endpoint: "/my/agent",
    })
      .then((response) => response.json())
      .then((json) => setDetails(json.data))
      .catch((err) => console.log(err));
  }, [state.accessToken]);

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
    <div
      className="bg-dark text-white p-4 vh-100 position-fixed end-0 top-0"
      style={{ width: "300px" }}
    >
      <h5 className="mb-3">
        Credits: {details.credits}
        <br />
        Ship Amount: {details.shipCount}
      </h5>

      {/* Display contract information if available */}
      {contracts.length > 0 && (
        <div>
          <h6>Contract</h6>
          <ContractDetails contract={contracts[0]} />
        </div>
      )}
    </div>
  );
};

export default ReputationMoney;
