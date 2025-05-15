import React from "react";
import Welcome from "./_components/Welcome";
import Create from "./_components/Create";
import LatestList from "./_components/LatestList";

function Dashboard() {
  return (
    <div>
      {/**<Welcome />**/}
      <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
      <Create />
      <LatestList />
    </div>
  );
}

export default Dashboard;
