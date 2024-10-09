import React from "react";
import ContractDetails from "./ContractDetails";
import { useLocation } from "react-router";

const Contracts = () => {
  let agent = useLocation().state;
  return (
    <div>
      {agent.data.contract && (
        <ContractDetails contract={agent.data.contract} />
      )}
    </div>
  );
};

export default Contracts;
