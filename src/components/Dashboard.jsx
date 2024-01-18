import React, { useState, useEffect } from "react";
import UpcomingEvents from "./UpcomingEvents";
import DashboardContent from "./DashboardContent";
import Navbar from "./Navbar";
export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <UpcomingEvents />
      <DashboardContent />
    </div>
  );
}
