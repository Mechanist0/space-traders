import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { request } from "../../../Functions/Api";
import { AccountContainer } from "./Card";
function Login() {
  const [input, setInput] = useState("");
  const [showError, setShowError] = useState(false);
  let navigate = useNavigate();

  const agentDetails = async () => {
    let response = await request({
      accessToken: input,
      endpoint: "/my/agent",
    });
    if (response.ok) {
      enterGame();
    } else setShowError(true);
  };

  const enterGame = () => {
    navigate("/", { state: { accessToken: input } });
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex flex-column align-items-center justify-content-center"
    >
      <AccountContainer
        inputLabel="Enter Access Token"
        placeholderText="Access Token"
        buttonLabel="Log In"
        onClick={agentDetails}
        input={input}
        setInput={setInput}
        showError={showError}
        errorText="Invalid Access Token."
      ></AccountContainer>
      <div className="d-flex justify-content-center mb-2 gap-1">
        <p>Don't have an access token?</p>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default Login;
