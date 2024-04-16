import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Curicullum from "./Curicullum/Curicullum";
import Homepage from "./Homepage";
import SideDashboardComponent from "./SideDashboardComponent";
import Mentor from "./Curicullum/Mentor/Mentor";
import Schedule from "./Curicullum/Schedule/Schedule";
import Assesment from "./Curicullum/Assesment/Assesment";
import Placement from "./Curicullum/Placement/Placement";

export default function Dashboard() {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [ratio, setratio] = useState("8");
  const [sidebar, setsidebar] = useState(true);

  const handleSidebarItemClick = (componentName) => {
    setSelectedComponent(componentName);
    if (componentName != "Home" || componentName == null) {
      setratio("10");
      setsidebar(false);
    } else {
      setratio("8");
      setsidebar(true);
    }
  };

  return (
    <div>
      <div className="row" style={{ height: "100vh", position: "relative" }}>
        <div
          className="col-2"
          style={{
            border: "1px solid #4d58ff",
            backgroundColor: "#4d58ff",
            maxHeight: "100%",
          }}
        >
          <div
            className="row d-flex justify-content-center align-items-center p-2"
            style={{
              maxHeight: "10%",
              backgroundColor: "white",
            }}
          >
            <img
              src="https://kochiva.com/wp-content/themes/Kochiva/kasset/assets/kochiva-logo.svg"
              style={{
                maxWidth: "70%",
                maxHeight: "70%",
                width: "auto",
                height: "auto",
              }}
            />
          </div>
          <div
            className="row"
            style={{
              maxHeight: "80%",
              overflowY: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Sidebar onItemClick={handleSidebarItemClick} />
          </div>
          <div className="row pt-3 px-4" style={{ maxHeight: "10%" }}>
            <button type="button" class="btn btn-light">
              Logout
            </button>
          </div>
        </div>
        <div className={"col-" + ratio} style={{ overflowY: "auto" }}>
          {selectedComponent === null && (
            <>
              <Homepage />
            </>
          )}
          {selectedComponent === "Home" && (
            <>
              <Homepage />
            </>
          )}
          {selectedComponent === "Course" && (
            <>
              <Curicullum />
            </>
          )}
          {selectedComponent === "Mentor" && (
            <>
              <Mentor />
            </>
          )}
          {selectedComponent === "Schedule" && (
            <>
              <Schedule />
            </>
          )}
          {selectedComponent === "Assesment" && (
            <>
              <Assesment />
            </>
          )}
          {selectedComponent === "Placement" && (
            <>
              <Placement />
            </>
          )}
        </div>

        {sidebar && <SideDashboardComponent />}
      </div>
    </div>
  );
}
