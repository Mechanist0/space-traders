import React from "react";
import ContractDetails from "./ContractDetails";
import { useLocation } from "react-router";
import NavSidebar from "../Landing/NavSidebar";
import ReputationMoney from "../Landing/ReputationMoney";
import { useState, useEffect } from "react";
import { request } from "../../../Functions/Api";

const Contracts = () => {
  let state = useLocation().state;
  let [contracts, setContracts] = useState({});

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
      {/* Sidebar */}
      <NavSidebar state={state} />

      {/* Main content */}
      <main className="main-content col-md-9 ms-sm-auto col-lg-10 px-md-4">
        {contracts[0] && <ContractDetails contract={contracts[0]} />}

        {/* Top Right Info Panel */}
        <ReputationMoney state={state} />
      </main>
    </div>
  );
};

export default Contracts;
