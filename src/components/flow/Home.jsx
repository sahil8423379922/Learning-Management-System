import React from "react";

export default function Home(props) {
  return (
    <>
      <a
        onClick={() => {
          props.handleItemClick("Home");
        }}
        class="list-group-item  text-white position-relative"
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <i class="fa fa-home pr-2" aria-hidden="true"></i> {/* Leading Icon */}
        Home
      </a>
    </>
  );
}
