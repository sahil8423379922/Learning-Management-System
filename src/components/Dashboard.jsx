import React, { useState, useEffect } from "react";
import UpcomingEvents from "./UpcomingEvents";
import DashboardContent from "./DashboardContent";
import Navbar from "./Navbar";
import FlowofEvent from "./FlowofEvent";
import Course from "./flow/Course";
export default function Dashboard() {
  function eventlog(val) {
    console.log("Function Called on Click" + val);
  }
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="col-3">
          <FlowofEvent eventlog={eventlog} />
        </div>
        <div className="col-9">
          {true ? (
            <div>
              <UpcomingEvents />
              <DashboardContent />
            </div>
          ) : (
            <Course />
          )}
        </div>
      </div>
    </div>
  );
}
