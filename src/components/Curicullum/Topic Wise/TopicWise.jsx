import React from "react";
import { useParams } from "react-router-dom";

export default function TopicWise() {
  const { title } = useParams();

  return (
    <>
      <div className="text-left container mt-4 fs-2">
        {title + " Detailed Curriculum"}
      </div>

      <div className="container mt-4 ">
        <table class="table table table-striped">
          <thead className="table-dark">
            <tr>
              <th className="col-2">S.NO</th>
              <th className="col-10">Topics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="col-2">1</th>
              <td className="col-10">Mark</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Jacob</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
