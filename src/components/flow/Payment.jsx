import React from "react";

export default function Payment() {
  return (
    <>
      <a
        class="list-group-item bg-warning-subtle text-dark"
        data-bs-toggle="collapse"
        href="#referandearn"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Payment
      </a>
      <div class="collapse" id="referandearn">
        <div className="row">
          <div className="mt-0">
            <ul class="list-group  mx-auto">
              <div class="list-group-item bg-body-tertiary">
                <i class="fa fa-bullhorn pr-3" aria-hidden="true"></i>
                Refer and Earn
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
