import { useState, useEffect } from "react";
import UpcommingClasses from "./UpcommingClasses";
import RecordedClasses from "./RecordedClasses";
import Syllabus from "./Syllabus/Syllabus";
import axios from "axios";

const Curicullum = () => {
  var state = true;
  const [activeTab, setActiveTab] = useState("view1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    Backend();
  }, []);

  function Backend() {
    axios
      .get("http://localhost:4000/api/data", { crossdomain: true })
      .then((response) => {
        data = response.data;
      })
      .then(() => {
        for (let x in data) {
          console.log("Data Received from loop =", data[x]["title"]);
          state ? title.push(data[x]["title"]) : "";
        }
        setData(title);
        state = false;
      });
  }

  return (
    <>
      <div className="container">
        <h3 className=" fw-bold pt-5">Software Engineering</h3>
        <p>You have access to 6 Modules in Software Engineering Course</p>
      </div>

      <div>
        <Syllabus />
      </div>

      <div className="container">
        <h3 className=" fw-semibold">Advanced DSA</h3>
        <p>You have access to 35 Lessions</p>
      </div>

      <div className="card container mt-3 vh-100 bg-light">
        <div className="container mt-3">
          <ul className="nav nav-tabs">
            <li className="nav-item col-6">
              <a
                className={`nav-link ${activeTab === "view1" ? "active" : ""}`}
                onClick={() => handleTabClick("view1")}
                href="#"
              >
                Upcoming Classes
              </a>
            </li>
            <li className="nav-item col-6">
              <a
                className={`nav-link ${activeTab === "view2" ? "active" : ""}`}
                onClick={() => handleTabClick("view2")}
                href="#"
              >
                Recorded Classes
              </a>
            </li>
          </ul>

          <div className="tab-content mt-2">
            <div
              className={`tab-pane fade ${
                activeTab === "view1" ? "show active" : ""
              }`}
              id="view1"
            >
              <UpcommingClasses />
            </div>
            <div
              className={`tab-pane fade ${
                activeTab === "view2" ? "show active" : ""
              }`}
              id="view2"
            >
              <RecordedClasses />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curicullum;
