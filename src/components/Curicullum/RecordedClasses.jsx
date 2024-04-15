import React from "react";
import Offlineclass from "./Offlineclass";

export default function RecordedClasses({ recordedClass, switchpages }) {
  return (
    <>
      <div className="table p-0 m-0">
        <div className="row text-center bg-dark text-white py-2">
          <div className="col-1">S.NO</div>
          <div className="col-3">Class Name</div>
          <div className="col-2">Date</div>
          <div className="col-2">Status</div>
          <div className="col-2">Task</div>
          <div className="col-2">Recording & Assignments</div>
        </div>

        {recordedClass.map((value, index) => {
          return (
            <Offlineclass
              offlineclass={value}
              sno={index}
              switchpages={switchpages}
            />
          );
        })}
      </div>
    </>
  );
}
