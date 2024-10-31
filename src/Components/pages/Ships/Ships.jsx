import React from "react";
import { useLocation } from "react-router";
import { request } from "../../../Functions/Api";
import { useState, useEffect } from "react";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Ships = ({ shipButtonInfo }) => {
  const [details, setDetails] = useState("");
  let state = useLocation().state;

  useEffect(() => {
    request({
      accessToken: state.accessToken,
      endpoint: "/my/ships",
    })
      .then((response) => response.json())
      .then((json) => setDetails(json.data))
      .catch((err) => console.log(err));
  }, [state.accessToken]);

  return (
    <div>
      Test
      {details && details.length > 0 && (
        <div style={{ flexGrow: 3, flexDirection: "column" }}>
          {/* Run through all ships */}

          {details.map((ship, index) => (
            <button key={index} onClick={() => shipButtonInfo(ship)}>
              <div
                style={{
                  flexGrow: 3,
                  flexDirection: "column",
                  alignContent: "start",
                }}
              >
                <hr />
                <div>{ship.registration.name}</div>
                <div>{ship.registration.role}</div>
                <div>{ship.nav.systemSymbol}</div>
                <div>{ship.nav.status}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ships;
