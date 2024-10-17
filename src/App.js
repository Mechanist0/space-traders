import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/pages/Login/Login";
import SignUp from "./Components/pages/Login/SignUp";
import Landing from "./Components/pages/Landing/Landing";
import Contracts from "./Components/pages/Contracts/Contracts";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/contracts" element={<Contracts />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
