import { request } from "../../../Functions/Api";
import { useState } from "react";
import { AccountContainer, CardContainer } from "./Card";
import { Link, useNavigate } from "react-router-dom";
import { InputGroup } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

const SignUp = () => {
  const [input, setInput] = useState("");
  const [showError, setShowError] = useState(false);
  const [showCopyPage, setShowCopyPage] = useState(false);
  const [gameState, setGameState] = useState({});
  const [copied, setCopied] = useState(false);

  const navigate = useNavigate();

  const copyAccessTokenToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText(gameState.token);
  };

  const signUp = async () => {
    let response = await request({
      endpoint: "/register",
      method: "POST",
      body: {
        symbol: input,
        faction: "COSMIC",
      },
    });
    if (response.ok) {
      setShowError(false);
      setShowCopyPage(true);
      let json = await response.json();
      setGameState(json.data);
    } else setShowError(true);
  };

  const enterGame = () => {
    navigate("/", { state: { accessToken: gameState.token } });
  };

  return (
    <div>
      {!showCopyPage ? (
        <div
          style={{ height: "100vh" }}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <AccountContainer
            inputLabel="Enter A Unique Username (a-z, A-Z)"
            placeholderText="Username"
            buttonLabel="Sign Up"
            onClick={signUp}
            input={input}
            setInput={setInput}
            showError={showError}
            errorText="Username Taken or Invalid."
          ></AccountContainer>
          <div className="d-flex justify-content-center mb-2 gap-1">
            <p>Have an Access Token?</p>
            <Link to="/login">Go Back</Link>
          </div>
        </div>
      ) : (
        <div
          style={{ height: "100vh" }}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <CardContainer
            header={`Great! Welcome, ${input}`}
            content={
              <div>
                <p>
                  You'll need your access token to login, so we recommend
                  storing it somewhere safe.
                </p>
                <InputGroup className="">
                  <Form.Control defaultValue={gameState.token} readOnly />
                  <Button
                    title="copy to clipboard"
                    style={{
                      minWidth: "3rem",
                    }}
                    onClick={copyAccessTokenToClipboard}
                  >
                    {copied ? "✓" : "📋"}
                  </Button>
                </InputGroup>
                <Button
                  className="mt-4"
                  style={{ minWidth: "100%" }}
                  onClick={enterGame}
                >
                  Continue
                </Button>
              </div>
            }
          />
        </div>
      )}
    </div>
  );
};

export default SignUp;
