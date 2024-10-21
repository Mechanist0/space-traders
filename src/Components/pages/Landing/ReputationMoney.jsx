import React from "react";
import { useLocation } from "react-router";
import { request } from "../../../Functions/Api";
import { useState, useEffect } from "react";

const ReputationMoney = () => {
  const [details, setDetails] = useState("");
  let state = useLocation().state;

  useEffect(() => {
    request({
      accessToken: state.accessToken,
      endpoint: "/my/agent",
    })
      .then((response) => response.json())
      .then((json) => setDetails(json.data))
      .catch((err) => console.log(err));
  }, [state.accessToken]);

  return (
    <div>
      {/* Top Right Info Panel */}
      <div className="d-flex justify-content-center">
        <h5>
          Credits: {details.credits} . Ships: {details.shipCount}
        </h5>
      </div>
    </div>
  );
};

export default ReputationMoney;
