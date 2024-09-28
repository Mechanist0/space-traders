import React from "react";

const AgentDetails = ({ agent }) => {
  return (
    <div>
      <strong>Agent Details:</strong>
      <div>
        <p>
          <strong>Account ID:</strong> {agent.accountId}
        </p>
        <p>
          <strong>Credits:</strong> {agent.credits}
        </p>
        <p>
          <strong>Headquarters:</strong> {agent.headquarters}
        </p>
        <p>
          <strong>Ship Count:</strong> {agent.shipCount}
        </p>
        <p>
          <strong>Starting Faction:</strong> {agent.startingFaction}
        </p>
        <p>
          <strong>Symbol:</strong> {agent.symbol}
        </p>
      </div>
    </div>
  );
};

export default AgentDetails;
