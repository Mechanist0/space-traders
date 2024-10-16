import React from "react";
import { useLocation, useNavigate } from "react-router";
import NavSidebar from "./NavSidebar";
import Panel from "./Panel";
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
          <Panel state={state} />
        </div>
      )}
    </div>
  );
}

// const Landing = () => {
//   let agent = useLocation().state;
//   return (
//     // Divide page into 3 sections
//     <div className="container-fluid">
//       <div className="col">
//         {/* Sidebar */}
//         <NavSidebar state={agent} />

//         {/* Main content */}
//         <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
//           <h1>Welcome to Space Traders!</h1>
//         </main>

//         {/* Top Right Info Panel */}
//         <ReputationMoney state={agent} />

//         {/* Middle Right Panel */}
//         <Panel state={agent} />
//       </div>
//     </div>
//   );
// };

export default Landing;
