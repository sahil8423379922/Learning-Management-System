import React from "react";
import Offlineclass from "./Offlineclass";

export default function RecordedClasses() {
  var recordedClass = [
    {
      topic: "Introduction to Data Structure",
      date: "10-1-2024",
      status: "Completed",
      prblm: "Solved",
      url: "/Recorded",
    },
    {
      topic: "Introduction to Arrays",
      date: "11-1-2024",
      status: "Completed",
      prblm: "Solved",
      url: "/Recorded",
    },
    {
      topic: "Lab Implementation of Array",
      date: "122-1-2024",
      status: "Completed",
      prblm: "Solved",
      url: "/Recorded",
    },
  ];
  return (
    <>
      <table className="table mx-0 my-0">
        <thead>
          <tr className="text-center">
            <th>S.NO</th>
            <th>Class Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Problem Solved</th>
            <th>Recording & Assignments</th>
          </tr>
        </thead>
        {recordedClass.map((value, index) => {
          return <Offlineclass offlineclass={value} sno={index} />;
        })}
      </table>
    </>
  );
}
