import React from "react";
import OnlineClass from "./OnlineClass";

export default function UpcommingClasses({ onlineClass }) {
  // var onlineClass = [
  //   {
  //     topic: "Introduction to Data Structure",
  //     date: "10-1-2024",
  //     status: "upcoming",
  //     prblm: "Solved",
  //     url: "https://www.google.com",
  //   },
  //   {
  //     topic: "Introduction to Arrays",
  //     date: "11-1-2024",
  //     status: "upcoming",
  //     prblm: "Solved",
  //     url: "https://www.google.com",
  //   },
  //   {
  //     topic: "Lab Implementation of Array",
  //     date: "122-1-2024",
  //     status: "upcoming",
  //     prblm: "Solved",
  //     url: "https://www.google.com",
  //   },
  // ];
  return (
    <>
      <div className="table p-0 m-0">
        <div className="row text-center bg-dark text-white py-2">
          <div className="col-1">S.NO</div>
          <div className="col-3">Class Name</div>
          <div className="col-2">Date</div>
          <div className="col-2">Time</div>
          <div className="col-2">Instructor</div>
          <div className="col-2">Link to Join</div>
        </div>

        {onlineClass.map((value, index) => {
          return <OnlineClass onlineclass={value} sno={index} />;
        })}
      </div>
    </>
  );
}
