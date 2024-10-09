import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import NewGame from "./Components/pages/NewGame";
import Landing from "./Components/pages/Landing";
import Contracts from "./Components/pages/Contracts/Contracts";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newgame" element={<NewGame />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/contracts" element={<Contracts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
