import React, { useState, useEffect } from "react";

function NewGame() {
  const [symbol, setSymbol] = useState("");
  const [info, setGameInfo] = useState([]);
  useEffect(() => {
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
        console.log(data);
        setGameInfo(data);
      });
  }, [symbol]);

  return (
    <div>
      <input
        name="symbolQuery"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter Symbol"
      />

      <h1>SAVE THIS KEY</h1>
      {info.map((data) => (
        <h1> {data.token} </h1>
      ))}
    </div>
  );
}

export default NewGame;
