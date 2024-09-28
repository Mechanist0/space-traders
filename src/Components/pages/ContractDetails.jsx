import React from "react";

const ContractDetails = ({ contract }) => {
  return (
    <div>
      <strong>Contract Details:</strong>
      <p>
        <strong>ID:</strong> {contract.id}
      </p>
      <p>
        <strong>Type:</strong> {contract.type}
      </p>
      <p>
        <strong>Faction:</strong> {contract.factionSymbol}
      </p>
      <p>
        <strong>Accepted:</strong> {contract.accepted ? "Yes" : "No"}
      </p>
      <p>
        <strong>Fulfilled:</strong> {contract.fulfilled ? "Yes" : "No"}
      </p>
      <p>
        <strong>Deadline to Accept:</strong> {contract.deadlineToAccept}
      </p>
      <p>
        <strong>Expiration:</strong> {contract.expiration}
      </p>
      <p>
        <strong>Terms Deadline:</strong> {contract.terms.deadline}
      </p>
      <p>
        <strong>Payment on Acceptance:</strong>{" "}
        {contract.terms.payment.onAccepted}
      </p>
      <p>
        <strong>Payment on Fulfillment:</strong>{" "}
        {contract.terms.payment.onFulfilled}
      </p>

      {contract.terms.deliver && contract.terms.deliver.length > 0 && (
        <div>
          <strong>Delivery Terms:</strong>
          <ul>
            {contract.terms.deliver.map((delivery, index) => (
              <li key={index}>
                <p>
                  <strong>Destination:</strong> {delivery.destination}
                </p>
                <p>
                  <strong>Units Required:</strong> {delivery.unitsRequired}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContractDetails;
