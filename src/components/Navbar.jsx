import React from "react";
import logo from "./Images/kochiva.svg";

export default function Navbar() {
  return (
    <>
      <div className="">
        <nav class="navbar bg-white">
          <div class="container-fluid">
            <img
              height={50}
              width={120}
              src={logo}
              alt="Logo"
              className="d-inline-block align-text-top pe-1 pb-2"
            />
          </div>
        </nav>
      </div>
    </>
  );
}
