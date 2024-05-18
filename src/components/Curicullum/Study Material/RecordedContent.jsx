import React from "react";
import ReactPlayer from "react-player/lazy";
import styles from "./RecordedContent.module.css";
import { Link } from "react-router-dom";
import AssignmentTable from "./AssignmentTable";
import Pdfrender from "./Pdfrender";

export default function RecordedContent({
  currenttopic,
  handelCuricullum,
  offlineclass,
}) {
  const assignmenttable = [
    {
      topic: "Welcome to Course",
    },
    {
      topic: "French Language Test 1",
    },
    {
      topic: "French Language Test 2",
    },
    {
      topic: "French Language Test 2",
    },
  ];
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-9"
            style={{
              maxHeight: "calc(100vh - 64px)",
              overflowY: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <div className="row">
              <div className="col-6">
                <h3 className="fw-bold ">{currenttopic}</h3>
                <p style={{ fontSize: "18px" }}>
                  You have access to 35 Lessons in French A1 module
                </p>
              </div>
              <div className="col-6">
                <div className="text-end pt-3">
                  <button
                    type="button"
                    className="btn btn-outline-danger rounded-0"
                    onClick={handelCuricullum}
                    style={{ fontWeight: "semibold" }}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
            <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
            <div className={styles.notesblock}>
              <div className="pb-2">Notes</div>
              <div>
                <Link to="/notes" className={`${styles.bd}`}>
                  Class Notes
                </Link>
                <Link to="/summary" className={`${styles.bd}`}>
                  Class Sumary
                </Link>
              </div>
            </div>

            <div className={styles.notesblock}>
              <div className="pb-2 ps-2">Assignments</div>
              <div style={{ paddingLeft: "18px", paddingRight: "18px" }}>
                <AssignmentTable assignmenttable={assignmenttable} />
              </div>
            </div>
          </div>

          <div className="col-3 card" style={{ borderRadius: 0 }}>
            <div style={{ height: "15%", maxHeight: "15vh" }}>
              <span style={{ fontSize: "20px" }}>French A1</span>
              <br></br>
              <span>{offlineclass.length}</span>
            </div>
            <div
              style={{
                height: "85%",
                maxHeight: "90vh",
                overflowY: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                "::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {offlineclass.map((value, index) => {
                return (
                  <div
                    className="card"
                    style={{
                      padding: "10px",
                      margin: "6px",
                      fontSize: "18px",
                      borderRadius: "0",
                    }}
                  >
                    <span>{value.topic}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
