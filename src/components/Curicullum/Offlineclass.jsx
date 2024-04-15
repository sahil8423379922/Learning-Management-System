import React from "react";
import styles from "./CSS Modules/UpcommingClasses.module.css";
import { Link } from "react-router-dom";

export default function Offlineclass({ offlineclass, sno }) {
  return (
    <>
      <div
        className="row py-2"
        style={{
          textAlign: "center",
          backgroundColor: sno % 2 === 0 ? "white" : "#f5f4f2",
        }}
      >
        <div className="col-1">{sno + 1}</div>
        <div className="col-3">{offlineclass.topic}</div>
        <div className="col-2">{offlineclass.date}</div>
        <div
          className="col-2"
          style={{ color: offlineclass.status == "Present" ? "green" : "red" }}
        >
          {offlineclass.status}
        </div>
        <div className="col-2">{offlineclass.prblm}</div>
        <div className="col-2" style={{}}>
          <Link
            to={offlineclass.url}
            type="button"
            className="btn btn-outline-primary rounded-0 py-1 px-5"
          >
            View
          </Link>
        </div>
      </div>
    </>
  );
}
