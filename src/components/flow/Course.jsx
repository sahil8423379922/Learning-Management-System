import React, { useState } from "react";

export default function Course(props) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <>
      <a
        data-bs-toggle="collapse"
        class="list-group-item  text-white position-relative"
        style={{
          backgroundColor: "transparent",
          border: "none",
        }}
        href="#intro"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <i class="fa fa-book pr-2" aria-hidden="true"></i>
        Course
        <i
          class={`fa ${
            isCollapsed ? "fa-angle-up" : "fa-angle-down"
          } position-absolute end-0`}
          style={{ top: "50%", transform: "translateY(-50%)" }}
          aria-hidden="true"
        ></i>
      </a>

      <div className={`collapse ${isCollapsed ? "show" : ""}`} id="intro">
        <div className="row">
          <div className="mt-0">
            <ul class="list-group  mx-auto ">
              <a
                class="list-group-item  text-white"
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => {
                  props.handleItemClick("Course");
                }}
              >
                <i class="fa fa-file-text-o pr-3" aria-hidden="true"></i>
                Curicullum
              </a>

              <div
                class="list-group-item  text-white"
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => {
                  props.handleItemClick("Mentor");
                }}
              >
                <i class="fa fa-user-o pr-3" aria-hidden="true"></i>
                Mentor
              </div>

              <div
                class="list-group-item  text-white"
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => {
                  props.handleItemClick("Schedule");
                }}
              >
                <i class="fa fa-calendar-o pr-3" aria-hidden="true"></i>
                Schedule
              </div>
              <div
                class="list-group-item  text-white"
                style={{ backgroundColor: "transparent", border: "none" }}
                onClick={() => {
                  props.handleItemClick("Assesment");
                }}
              >
                <i class="fa fa-tasks pr-3" aria-hidden="true"></i>
                Assesment
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
