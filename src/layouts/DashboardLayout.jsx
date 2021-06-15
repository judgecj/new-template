import React from "react";

import DHeaderComp from "../components/DHeaderComp";
import DSidebarComp from "../components/DSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard">
      <DHeaderComp />
      <div className="dashboard-wrapper">
        <DSidebarComp />
        <div className="dashboard-main">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
