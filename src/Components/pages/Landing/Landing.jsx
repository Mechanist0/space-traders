import React from "react";
import { useLocation, useNavigate } from "react-router";
import NavSidebar from "./NavSidebar";
import ReputationMoney from "./ReputationMoney";
import { useEffect } from "react";

function Landing() {
  let state = useLocation().state;

  const navigate = useNavigate();
  useEffect(() => {
    if (state === null || state === undefined) {
      navigate("/login");
    }
  });

  return (
    <div>
      {state && (
        <div>
          <NavSidebar state={state} />
          <main className="main-content col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h1>Welcome to Space Traders!</h1>
          </main>
          <ReputationMoney state={state} />
        </div>
      )}
    </div>
  );
}

export default Landing;
