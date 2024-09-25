import React, { useEffect, useState } from "react";

function NewGame() {
  const [symbol, setSymbol] = useState("");
  const [gameInfo, setGameInfo] = useState(null);

  const registerNewAgent = async () => {
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

    try {
      const response = await fetch("https://api.spacetraders.io/v2/register", options);
      const data = await response.json();
      setGameInfo(data);
    } catch (err) {
      console.error("Error registering agent:", err);
    }
  };

  return (
    <div>
      <input
        name="symbolQuery"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter Symbol" />

      <button onClick={registerNewAgent}>Register Agent</button>
      {gameInfo && <h1>{JSON.stringify(gameInfo)}</h1>}
    </div>
  );
}

export default NewGame;
