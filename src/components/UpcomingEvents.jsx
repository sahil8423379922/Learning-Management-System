import React, { useState, useEffect } from "react";
import logo from "./teacherpic.jpg";
import CountdownTimer from "./Countdown";
export default function UpcomingEvents() {
  return (
    <div className="row bg-light mx-5 shadow-sm p-3 mb-5 bg-body-tertiary rounded ">
      <div className="col-2 ">
        <img src={logo} class="img-fluid" alt="..." />
      </div>
      <div className="col-7">
        <div>
          <div>
            <h4>Upcoming class: Implementation Lab - Sorting</h4>
          </div>
          <div>
            <p>By Sahil Jaiswal</p>
          </div>

          <div>
            <p>18th January, 09:00 PM</p>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="fs-5 fw-bold  h-25 ">
          <p className="text-danger text-center ">
            <CountdownTimer />
          </p>
        </div>
        <div className="h-75">
          <div class="d-grid gap-2 align-bottom">
            <button class="btn btn-primary" type="button">
              Join Meet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
