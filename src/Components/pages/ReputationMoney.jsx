import React from "react";
import { useLocation } from "react-router";
import "./Styling/ReputationMoney.css";

const ReputationMoney = () => {
  let agent = useLocation().state;

  return (
    <div>
      {/* Top Right Info Panel */}
      <div className="moneypanel">
        <h5>
          Credits: {agent.data.agent.credits} . Ships:{" "}
          {agent.data.agent.shipCount}
        </h5>
      </div>
    </div>
  );
};

export default ReputationMoney;
