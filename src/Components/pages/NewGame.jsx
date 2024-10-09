import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styling/NewGame.css";
import ErrorPopup from "./ErrorPopup";
import AgentDetails from "./AgentDetails";
import ContractDetails from "./Contracts/ContractDetails";

function NewGame() {
  const [symbol, setSymbol] = useState("");
  const [info, setGameInfo] = useState(null);
  const [error, setError] = useState(null);

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
          console.log("API Response:", data);
          if (data.error) {
            const errorMessage = data.error.message.includes(
              "Cannot register agent",
            )
              ? `Cannot register agent. Agent symbol ${symbol} has already been claimed.`
              : "An error occurred while fetching the data. Please try again.";
            setError(errorMessage);
          } else {
            setGameInfo(data);
            setError(null);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(
            "An error occurred while fetching the data. Please try again.",
          );
        });
    }
  };

  const handleSaveToken = () => {
    navigator.clipboard.writeText(info.data.token).then(() => {
      alert("Token saved to clipboard!");
    });
  };

  return (
    <div>
      <input
        name="symbolQuery"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter Symbol"
      />

      <h1>SAVE THE TOKEN</h1>

      {error && <ErrorPopup message={error} onClose={() => setError(null)} />}
      {info && info.data ? (
        <div key={info.data.token}>
          <button
            onClick={handleSaveToken}
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Save Token
          </button>
          {info.data.agent && <AgentDetails agent={info.data.agent} />}
          <Link to="/landing" state={info}>
            Landing Page
          </Link>
          {info.data.contract && (
            <ContractDetails contract={info.data.contract} />
          )}
        </div>
      ) : (
        <p>No game information available yet.</p>
      )}
    </div>
  );
}

export default NewGame;
