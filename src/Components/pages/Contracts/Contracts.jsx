import React from "react";
import ContractDetails from "./ContractDetails";
import { useLocation } from "react-router";
import NavSidebar from "../NavSidebar";
import ReputationMoney from "../ReputationMoney";

const Contracts = () => {
  let agent = useLocation().state;
  return (
    <div>
      {/* Sidebar */}
      <NavSidebar state={agent} />

      {/* Main content */}
      <main class="main-content col-md-9 ms-sm-auto col-lg-10 px-md-4">
        {agent.data.contract && (
          <ContractDetails contract={agent.data.contract} />
        )}

        {/* Top Right Info Panel */}
        <ReputationMoney state={agent} />
      </main>
    </div>
  );
};

export default Contracts;
