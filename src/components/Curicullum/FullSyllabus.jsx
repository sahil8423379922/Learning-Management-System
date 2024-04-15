import React from "react";

export default function FullSyllabus({
  currenttopic,
  handelCuricullum,
  completesylabus,
}) {
  console.log(completesylabus);
  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <h3 className="fw-bold ">{currenttopic}</h3>
              <p style={{ fontSize: "18px" }}>
                Detailed curriculum of {currenttopic}
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
      </div>
      <div className="table p-0 m-0">
        <div className="row  bg-dark text-white py-2">
          <div className="col">S.NO</div>
        </div>
        {completesylabus.map((value, index) => (
          <div
            key={index}
            className="row py-2"
            style={{
              textAlign: "left",
              backgroundColor: index % 2 === 0 ? "white" : "#f5f4f2",
            }}
          >
            <div className="col-1">{index + 1}</div>
            <div className="col-11">{value.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}
