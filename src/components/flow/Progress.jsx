import React, { useState } from "react";

export default function Progress(props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <a
        class="list-group-item  text-white position-relative"
        style={{ backgroundColor: "transparent", border: "none" }}
        data-bs-toggle="collapse"
        href="#progress"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <i class="fa fa-tasks pr-2" aria-hidden="true"></i>
        {/* Leading Icon */}
        Progress
        <i
          class={`fa ${
            isCollapsed ? "fa-angle-up" : "fa-angle-down"
          } position-absolute end-0`}
          style={{ top: "50%", transform: "translateY(-50%)" }}
          aria-hidden="true"
        ></i>{" "}
        {/* Trailing Icon */}
      </a>

      <div className={`collapse ${isCollapsed ? "show" : ""}`} id="progress">
        <div className="row">
          <div className="mt-0">
            <ul class="list-group  mx-auto">
              <div
                class="list-group-item  text-white"
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => {
                  props.handleItemClick("Placement");
                }}
              >
                <i class="fa fa-suitcase pr-3" aria-hidden="true"></i>
                Placemnet
              </div>
              <div
                class="list-group-item  text-white"
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <i class="fa fa-star-o pr-3" aria-hidden="true"></i>
                Leaderboard
              </div>
              <div
                class="list-group-item  text-white"
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <i class="fa fa-credit-card pr-3" aria-hidden="true"></i>
                Store
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
