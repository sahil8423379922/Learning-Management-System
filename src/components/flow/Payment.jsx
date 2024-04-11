import React, { useState } from "react";

export default function Payment() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <a
        class="list-group-item  text-white position-relative"
        style={{ backgroundColor: "transparent", border: "none" }}
        data-bs-toggle="collapse"
        href="#referandearn"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <i class="fa fa-credit-card pr-2" aria-hidden="true"></i>{" "}
        {/* Leading Icon */}
        Payment
        <i
          class={`fa ${
            isCollapsed ? "fa-angle-up" : "fa-angle-down"
          } position-absolute end-0`}
          style={{ top: "50%", transform: "translateY(-50%)" }}
          aria-hidden="true"
        ></i>{" "}
        {/* Trailing Icon */}
      </a>
      <div
        className={`collapse ${isCollapsed ? "show" : ""}`}
        id="referandearn"
      >
        <div className="row">
          <div className="mt-0">
            <ul class="list-group  mx-auto">
              <div
                class="list-group-item  text-white"
                style={{ backgroundColor: "transparent", border: "none" }}
              >
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
