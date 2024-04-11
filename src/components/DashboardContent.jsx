import React from "react";
import CardComponent from "./CardComponent";

export default function DashboardContent() {
  const data = [
    { title: "Introduction to Kochiva", description: "Duration : 0:45 Sec" },
    {
      title: "Structured Course Introduction",
      description: "Duration : 0:65 Sec",
    },
    { title: "Live Classroom features", description: "Duration : 1:00 Min" },
    {
      title: "Introduction to Data Structure & Algo",
      description: "Duration : 1:00 Min",
    },
  ];

  return (
    <div>
      <div className="container">
        <div className=" fs-3 fw-bold">Structured Curriculum</div>
        <div>Let's get Started</div>

        <div className="shadow-sm p-3 mb-5 mt-4 bg-body-tertiary">
          <div className="pt-4">
            <p class="d-inline-flex gap-1">
              <a
                class="btn btn-primary"
                data-bs-toggle="collapse"
                role="button"
                href="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Meet and Greet
              </a>
            </p>

            <div class="collapse show" id="collapseExample">
              <div className="row">
                <CardComponent data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
