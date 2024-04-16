import React from "react";
import ReactPlayer from "react-player/lazy";
import styles from "./RecordedContent.module.css";

export default function RecordedContent({
  currenttopic,
  handelCuricullum,
  offlineclass,
}) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col-6">
                <h3 className="fw-bold ">{currenttopic}</h3>
                <p style={{ fontSize: "18px" }}>
                  You have access to 35 Lessions in French A1 module
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
                <a className={styles.bd}>dasds</a>
                <a className={styles.bd}>dasds</a>
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
