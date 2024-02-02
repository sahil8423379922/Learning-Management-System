import React from "react";

export default function Course() {
  return (
    <>
      <a
        data-bs-toggle="collapse"
        className="list-group-item bg-warning-subtle text-dark"
        href="#intro"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Course
      </a>

      <div class="collapse" id="intro">
        <div className="row">
          <div className="mt-0">
            <ul class="list-group  mx-auto ">
              <a href="/Curicullum" class="list-group-item bg-body-tertiary">
                <i class="fa fa-file-text-o pr-3" aria-hidden="true"></i>
                Curicullum
              </a>
              <div class="list-group-item bg-body-tertiary">
                <i class="fa fa-user-o pr-3" aria-hidden="true"></i>
                Mentor
              </div>
              <div class="list-group-item bg-body-tertiary">
                <i class="fa fa-calendar-o pr-3" aria-hidden="true"></i>
                Schedule
              </div>
              <div class="list-group-item bg-body-tertiary">
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
