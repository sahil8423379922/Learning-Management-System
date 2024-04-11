import React from "react";
import { useParams } from "react-router-dom";

export default function TopicWise() {
  const { data } = useParams();
  const deserializedData = JSON.parse(decodeURIComponent(data));
  console.log(deserializedData);

  return (
    <>
      <div className="text-left container mt-4 fs-2">
        {deserializedData.name + " Detailed Curriculum"}
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
            {deserializedData.topics.map((value, index) => {
              return (
                <>
                  <tr>
                    <th className="col-2">{index + 1}</th>
                    <td className="col-10">{value}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
