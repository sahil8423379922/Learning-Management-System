import React from "react";
import OnlineClass from "./OnlineClass";

export default function UpcommingClasses() {
  var onlineClass = [
    {
      topic: "Introduction to Data Structure",
      date: "10-1-2024",
      status: "upcoming",
      prblm: "Solved",
      url: "https://www.google.com",
    },
    {
      topic: "Introduction to Arrays",
      date: "11-1-2024",
      status: "upcoming",
      prblm: "Solved",
      url: "https://www.google.com",
    },
    {
      topic: "Lab Implementation of Array",
      date: "122-1-2024",
      status: "upcoming",
      prblm: "Solved",
      url: "https://www.google.com",
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
        {onlineClass.map((value, index) => {
          return <OnlineClass onlineclass={value} sno={index} />;
        })}
      </table>
    </>
  );
}
