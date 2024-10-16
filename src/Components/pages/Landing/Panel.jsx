import React from "react";
import { useLocation } from "react-router";
import "../Styling/Panel.css";

const Panel = () => {
  let state = useLocation().state;

  return (
    <div>
      {/* Right Panel */}
      <div className="panel">
        <h2>Agent Details</h2>
      </div>
    </div>
  );
};

export default Panel;
