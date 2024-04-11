import React, { useState } from "react";
import UpcomingEvents from "./UpcomingEvents";
import DashboardContent from "./DashboardContent";
import Sidebar from "./Sidebar/Sidebar";
import Curicullum from "./Curicullum/Curicullum";

export default function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleSidebarItemClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <div>
      {/* <div style={{ position: "fixed", top: 0, width: "100%", zIndex: 2 }}>
        <Navbar />
      </div> */}
      <div className="row">
        <div className="col-2">
          <div style={{ height: "20px" }}>text</div>
          <div
            className="col-2"
            style={{
              backgroundColor: "blue",
              position: "fixed",
              bottom: 0,
              top: 0,
              overflowY: "auto",
              zIndex: 1,
            }}
          >
            <div>
              <Sidebar onItemClick={handleSidebarItemClick} />
            </div>
          </div>
        </div>
        <div className="col-10">
          {selectedComponent === null && (
            <>
              <UpcomingEvents />
              <DashboardContent />
            </>
          )}
          {selectedComponent === "Home" && (
            <>
              <UpcomingEvents />
              <DashboardContent />
            </>
          )}
          {selectedComponent === "Course" && <Curicullum />}
          {/* Add other conditions for selected components if needed */}
        </div>
      </div>
    </div>
  );
}
