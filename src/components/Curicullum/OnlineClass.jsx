import React from "react";

export default function OnlineClass({ onlineclass, sno }) {
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
        <div className="col-3">{onlineclass.topic}</div>
        <div className="col-2">{onlineclass.date}</div>
        <div className="col-2">{onlineclass.status}</div>
        <div className="col-2">{onlineclass.prblm}</div>
        <div className="col-2">
          <a
            href={onlineclass.url}
            type="button"
            className="btn btn-secondary py-1"
          >
            Join Class
          </a>
        </div>
      </div>
    </>
  );
}
