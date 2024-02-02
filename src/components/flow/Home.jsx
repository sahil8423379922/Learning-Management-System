import React from "react";

export default function Home({ eventlog }) {
  return (
    <>
      <a class="list-group-item bg-warning-subtle text-dark">Home</a>
      <div>
        <button onClick={eventlog}>Launch Event</button>
      </div>
    </>
  );
}
