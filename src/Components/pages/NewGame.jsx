import React, { useState } from "react";

function NewGame() {
  const [symbol, setSymbol] = useState("");
  const [info, setGameInfo] = useState(null);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && symbol) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          symbol: symbol,
          faction: "COSMIC",
        }),
      };

      fetch("https://api.spacetraders.io/v2/register", options)
        .then((response) => response.json())
        .then((data) => {
          console.log("API Response:", data); // Debugging line
          setGameInfo(data); // Save API response
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  };

  return (
    <div>
      <input
        name="symbolQuery"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        onKeyPress={handleKeyPress} // Listen for "Enter" key
        placeholder="Enter Symbol"
      />

      <h1>SAVE THIS KEY</h1>

      {info && info.data ? (
        <div key={info.data.token}>
          {/* Token */}
          <p>
            <strong>Token:</strong> {info.data.token}
          </p>

          {/* Check for agent and contract existence */}
          {info.data.agent && info.data.contract ? (
            <div>
              <strong>Agent and Contract Details:</strong>
              <div>
                {/* Agent Details */}
                {info.data.agent.length > 0 && (
                  <div>
                    <p>
                      <strong>Account ID:</strong>{" "}
                      {info.data.agent[0].accountId}
                    </p>
                    <p>
                      <strong>Credits:</strong> {info.data.agent[0].credits}
                    </p>
                    <p>
                      <strong>Headquarters:</strong>{" "}
                      {info.data.agent[0].headquarters}
                    </p>
                    <p>
                      <strong>Ship Count:</strong>{" "}
                      {info.data.agent[0].shipCount}
                    </p>
                    <p>
                      <strong>Starting Faction:</strong>{" "}
                      {info.data.agent[0].startingFaction}
                    </p>
                    <p>
                      <strong>Symbol:</strong> {info.data.agent[0].symbol}
                    </p>
                  </div>
                )}

                {/* Contract Details */}
                {info.data.contract && (
                  <div>
                    <strong>Contract Details:</strong>
                    <p>
                      <strong>ID:</strong> {info.data.contract.id}
                    </p>
                    <p>
                      <strong>Type:</strong> {info.data.contract.type}
                    </p>
                    <p>
                      <strong>Faction:</strong>{" "}
                      {info.data.contract.factionSymbol}
                    </p>
                    <p>
                      <strong>Accepted:</strong>{" "}
                      {info.data.contract.accepted ? "Yes" : "No"}
                    </p>
                    <p>
                      <strong>Fulfilled:</strong>{" "}
                      {info.data.contract.fulfilled ? "Yes" : "No"}
                    </p>
                    <p>
                      <strong>Deadline to Accept:</strong>{" "}
                      {info.data.contract.deadlineToAccept}
                    </p>
                    <p>
                      <strong>Expiration:</strong>{" "}
                      {info.data.contract.expiration}
                    </p>
                    <p>
                      <strong>Terms Deadline:</strong>{" "}
                      {info.data.contract.terms.deadline}
                    </p>
                    {/* Payment details */}
                    <p>
                      <strong>Payment on Acceptance:</strong>{" "}
                      {info.data.contract.terms.payment.onAccepted}
                    </p>
                    <p>
                      <strong>Payment on Fulfillment:</strong>{" "}
                      {info.data.contract.terms.payment.onFulfilled}
                    </p>

                    {/* Deliver array (if present) */}
                    {info.data.contract.terms.deliver &&
                      info.data.contract.terms.deliver.length > 0 && (
                        <div>
                          <strong>Delivery Terms:</strong>
                          <ul>
                            {info.data.contract.terms.deliver.map(
                              (delivery, index) => (
                                <li key={index}>
                                  <p>
                                    <strong>Destination:</strong>{" "}
                                    {delivery.destination}
                                  </p>
                                  <p>
                                    <strong>Units Required:</strong>{" "}
                                    {delivery.unitsRequired}
                                  </p>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <p>Agent or contract data not available.</p>
          )}
        </div>
      ) : (
        <p>No game information available yet.</p>
      )}
    </div>
  );
}

export default NewGame;
