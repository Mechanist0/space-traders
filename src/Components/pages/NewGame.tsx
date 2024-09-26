import React, { useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";

function NewGame() {
  const [symbol, setSymbol] = useState("");
  const [data, setGameInfo] = useState(String);

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

    const fetchRepos = async () => {
      const response = await fetch("https://api.spacetraders.io/v2/register", options);
      const data = await response.json();
      setGameInfo(data);
      console.log(data)
    } catch (err) {
      console.error("Error registering agent:", err);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div>
      <input
        name="symbolQuery"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter Symbol" />

      <button onClick={registerNewAgent}>Register Agent</button>
      <h1>SAVE THIS KEY</h1>
      {data && <h1>{data.toString()}</h1>}
    </div>
  );
}

export default NewGame;
