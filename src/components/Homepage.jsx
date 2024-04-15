import React from "react";
import UpcomingEvents from "./UpcomingEvents";
import DashboardContent from "./DashboardContent";

export default function Homepage() {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <UpcomingEvents />
        <DashboardContent />
      </div>
    </>
  );
}
