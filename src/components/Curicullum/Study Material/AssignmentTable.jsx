import React from "react";
import { Link } from "react-router-dom";

export default function AssignmentTable({ assignmenttable }) {
  return (
    <>
      <div className="row text-center bg-dark text-white py-2">
        <div className="col-1">S.NO</div>
        <div className="col-8">Assignment</div>
        <div className="col-3">Link</div>
      </div>

      {assignmenttable.map((value, index) => {
        return (
          <div
            className="row py-2"
            style={{
              textAlign: "center",
              backgroundColor: index % 2 === 0 ? "white" : "#f5f4f2",
            }}
          >
            <div className="col-1">{index + 1}</div>
            <div className="col-8">{value.topic}</div>

            <div className="col-3">
              <Link
                type="button"
                className="btn btn-outline-primary rounded-0 py-1 px-5"
              >
                View
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
