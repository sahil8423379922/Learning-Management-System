import React from "react";
import logo from "./Images/discord.png";

export default function Navbar() {
  return (
    <>
      <div className="">
        <nav class="navbar bg-body-tertiary  mb-4">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                src={logo}
                alt="Logo"
                width="40"
                height="38"
                className="d-inline-block align-text-top pe-1"
              />
              Join Discord
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
