import React from "react";
import usericon from "./Images/officeman.png";

export default function SideDashboardComponent() {
  return (
    <div className="col-2">
      <center style={{ marginTop: "30px" }}>
        <img
          src={usericon}
          style={{
            height: "80px",
            width: "80px",
            borderRadius: "50%",
          }}
        />

        <div>Welcome Back</div>
        <div style={{ fontSize: "23px", fontWeight: "bold" }}>
          Sahil Jaiswal
        </div>
        <div className="card mx-3 py-2">Batch B20</div>
      </center>
      <hr />
    </div>
  );
}
