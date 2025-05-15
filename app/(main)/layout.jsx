import React from "react";
import Provider from "./provider";

function Dashboardlayout({ children }) {
  return (
    <div className="">
      <Provider>
        <div className="mt-10">{children}</div>
      </Provider>
    </div>
  );
}

export default Dashboardlayout;
