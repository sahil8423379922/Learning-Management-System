import React from "react";

export default function Progress() {
  return (
    <>
      <a
        class="list-group-item bg-warning-subtle text-dark"
        data-bs-toggle="collapse"
        href="#progress"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Progress
      </a>
      <div class="collapse" id="progress">
        <div className="row">
          <div className="mt-0">
            <ul class="list-group  mx-auto">
              <div class="list-group-item bg-body-tertiary">
                <i class="fa fa-suitcase pr-3" aria-hidden="true"></i>
                Placemnet
              </div>
              <div class="list-group-item bg-body-tertiary">
                <i class="fa fa-star-o pr-3" aria-hidden="true"></i>
                Leaderboard
              </div>
              <div class="list-group-item bg-body-tertiary">
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
