import React from "react";
import { useLocation } from "react-router";
import NavSidebar from "./NavSidebar";
import Panel from "./Panel";
import ReputationMoney from "./ReputationMoney";
import { useEffect } from "react";

function Landing() {
  let agent = useLocation().state;

  useEffect(() => {
    console.log(agent.data.agent.credits);
  }, [agent]);

  return (
    <div>
      <NavSidebar state={agent} />
      <main class="main-content col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <h1>Welcome to Space Traders!</h1>
      </main>
      <ReputationMoney state={agent} />
      <Panel state={agent} />
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
