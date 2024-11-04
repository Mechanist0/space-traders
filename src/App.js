import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/pages/Login/Login";
import SignUp from "./Components/pages/Login/SignUp";
import Landing from "./Components/pages/Landing/Landing";
import Contracts from "./Components/pages/Contracts/Contracts";
import Map from "./Components/pages/Map/Map";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
