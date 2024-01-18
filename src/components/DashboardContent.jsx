import React from "react";

export default function DashboardContent() {
  return (
    <div>
      <div className="container">
        <div className=" fs-3 fw-bold">Structured Curriculum</div>
        <div>Let's get Started</div>

        <div className="container shadow-sm p-3 mb-5 mt-4 bg-body-tertiary">
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
            <div class="collapse" id="collapseExample">
              <div class="container">
                <div className="row">
                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title">Card Title</div>
                        <div className="card-text">
                          <div>001.</div>
                          <div>Welcome to Kochiva</div>
                          <div>Duration : 0:42 Mins</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title">Card Title</div>
                        <div className="card-text">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Libero unde ullam culpa quam veniam. Quibusdam
                          laboriosam quas esse perspiciatis delectus
                          reprehenderit necessitatibus dolores ut maxime vitae
                          eius distinctio, hic quia?
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title">Card Title</div>
                        <div className="card-text">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Libero unde ullam culpa quam veniam. Quibusdam
                          laboriosam quas esse perspiciatis delectus
                          reprehenderit necessitatibus dolores ut maxime vitae
                          eius distinctio, hic quia?
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title">Card Title</div>
                        <div className="card-text">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Libero unde ullam culpa quam veniam. Quibusdam
                          laboriosam quas esse perspiciatis delectus
                          reprehenderit necessitatibus dolores ut maxime vitae
                          eius distinctio, hic quia?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
