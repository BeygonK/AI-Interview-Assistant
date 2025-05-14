import React from "react";
import Provider from "./provider";

function Dashboardlayout({ children }) {
  return (
    <div>
      <Provider>{children}</Provider>
    </div>
  );
}

export default Dashboardlayout;
