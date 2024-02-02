import React from "react";
import Progress from "./flow/Progress";
import Course from "./flow/Course";
import Payment from "./flow/Payment";
import DoubtSupport from "./flow/DoubtSupport";
import Home from "./flow/home";

export default function FlowofEvent({ eventlog }) {
  return (
    <div>
      <ul class="list-group  mx-auto">
        <Home eventlog={eventlog} />
        <Course />
        <Progress />
        <Payment />
        <DoubtSupport />
      </ul>
    </div>
  );
}
