import React from "react";
// import DocumentViewer from "react-documents";

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
          </div>

          <div className="col-3 card" style={{ borderRadius: 0 }}>
            <div style={{ height: "15%", maxHeight: "15vh" }}>
              <span style={{ fontSize: "20px" }}>French A1</span>
              <br></br>
              <span>{offlineclass.length}</span>
            </div>
            <div
              style={{
                height: "85%", // Set height to 90% of parent's height
                maxHeight: "90vh", // Set max-height to 90% of viewport height (optional)
                overflowY: "auto", // Enable vertical scrollbar when content overflows
                scrollbarWidth: "none", // Hide scrollbar for Firefox
                msOverflowStyle: "none", // Hide scrollbar for IE/Edge
                "::-webkit-scrollbar": {
                  // Hide scrollbar for Webkit browsers (Chrome, Safari, etc.)
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
