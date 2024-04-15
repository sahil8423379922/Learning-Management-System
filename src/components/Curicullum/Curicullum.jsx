import { useState, useEffect } from "react";
import UpcommingClasses from "./UpcommingClasses";
import RecordedClasses from "./RecordedClasses";
import Syllabus from "./Syllabus/Syllabus";
import axios from "axios";
import FullSyllabus from "./FullSyllabus";
import RecordedContent from "./Study Material/RecordedContent";

const Curicullum = () => {
  var state = true;
  const [activeTab, setActiveTab] = useState("view1");
  const [opncrl, setOpencrl] = useState(true);
  const [currenttopic, setcurrenttopic] = useState("French A1");
  const [stdymtrl, setstdymtrl] = useState("classes");
  const [offlineclass, setofflineclass] = useState([
    {
      topic: "Basics of the language- salutations",
      date: "18-4-2024",
      status: "Present",
      prblm: "Solved",
      url: "https://www.google.com",
    },
    {
      topic: "Letters and Numbers",
      date: "19-4-2024",
      status: "Absent",
      prblm: "Solved",
      url: "https://www.google.com",
    },
    {
      topic: "Basics of the language- salutations",
      date: "18-4-2024",
      status: "Present",
      prblm: "Solved",
      url: "https://www.google.com",
    },
    {
      topic: "Letters and Numbers",
      date: "19-4-2024",
      status: "Absent",
      prblm: "Solved",
      url: "https://www.google.com",
    },
    {
      topic: "Basics of the language- salutations",
      date: "18-4-2024",
      status: "Present",
      prblm: "Solved",
      url: "https://www.google.com",
    },
    {
      topic: "Letters and Numbers",
      date: "19-4-2024",
      status: "Absent",
      prblm: "Solved",
      url: "https://www.google.com",
    },
    {
      topic: "Basics of the language- salutations",
      date: "18-4-2024",
      status: "Present",
      prblm: "Solved",
      url: "https://www.google.com",
    },
    {
      topic: "Letters and Numbers",
      date: "19-4-2024",
      status: "Absent",
      prblm: "Solved",
      url: "https://www.google.com",
    },
    {
      topic: "Basics of the language- salutations",
      date: "18-4-2024",
      status: "Present",
      prblm: "Solved",
      url: "https://www.google.com",
    },
    {
      topic: "Letters and Numbers",
      date: "19-4-2024",
      status: "Absent",
      prblm: "Solved",
      url: "https://www.google.com",
    },
    {
      topic: "Basics of the language- salutations",
      date: "18-4-2024",
      status: "Present",
      prblm: "Solved",
      url: "https://www.google.com",
    },
    {
      topic: "Letters and Numbers",
      date: "19-4-2024",
      status: "Absent",
      prblm: "Solved",
      url: "https://www.google.com",
    },
    {
      topic: "Basics of the language- salutations",
      date: "18-4-2024",
      status: "Present",
      prblm: "Solved",
      url: "https://www.google.com",
    },
    {
      topic: "Letters and Numbers",
      date: "19-4-2024",
      status: "Absent",
      prblm: "Solved",
      url: "https://www.google.com",
    },
    {
      topic: "Basics of the language- salutations",
      date: "18-4-2024",
      status: "Present",
      prblm: "Solved",
      url: "https://www.google.com",
    },
    {
      topic: "Letters and Numbers",
      date: "19-4-2024",
      status: "Absent",
      prblm: "Solved",
      url: "https://www.google.com",
    },
  ]);

  const [upcomingClass, setclass] = useState([
    {
      topic: "Introduction to Data Structure",
      date: "10-1-2024",
      status: "upcoming",
      prblm: "Solved",
      url: "https://www.google.com",
    },
    {
      topic: "Introduction to Arrays",
      date: "11-1-2024",
      status: "upcoming",
      prblm: "Solved",
      url: "https://www.google.com",
    },
    {
      topic: "Lab Implementation of Array",
      date: "122-1-2024",
      status: "upcoming",
      prblm: "Solved",
      url: "https://www.google.com",
    },
  ]);

  const [completesylabus, setsyllabus] = useState();

  const fa1 = [
    {
      name: "Familiarisation with the Language",
    },
    {
      name: "Everyday Conversations",
    },
    {
      name: "The Cultural Centre",
    },
    {
      name: "Around the World with the language",
    },
  ];

  const fa2 = [
    {
      name: "Familiarisation with the Language",
    },
    {
      name: "Everyday Conversations",
    },
    {
      name: "The Cultural Centre",
    },
    {
      name: "Around the World with the language",
    },
  ];

  const fb1 = [
    {
      name: "Familiarisation with the Language",
    },
    {
      name: "Everyday Conversations",
    },
    {
      name: "The Cultural Centre",
    },
    {
      name: "Around the World with the language",
    },
  ];

  const fb2 = [
    {
      name: "Familiarisation with the Language",
    },
    {
      name: "Everyday Conversations",
    },
    {
      name: "The Cultural Centre",
    },
    {
      name: "Around the World with the language",
    },
  ];

  const fc1 = [
    {
      name: "Familiarisation with the Language",
    },
    {
      name: "Everyday Conversations",
    },
    {
      name: "The Cultural Centre",
    },
    {
      name: "Around the World with the language",
    },
  ];

  const fc2 = [
    {
      name: "Familiarisation with the Language",
    },
    {
      name: "Everyday Conversations",
    },
    {
      name: "The Cultural Centre",
    },
    {
      name: "Around the World with the language",
    },
  ];

  var upcoming = [];
  var offline = [];
  const offlineclasses = (name) => {
    if (name == "French A1") {
      offline = [
        {
          topic: "Basics of the language- salutations",
          date: "18-4-2024",
          status: "upcoming",
          prblm: "Solved",
          url: "https://www.google.com",
        },
        {
          topic: "Letters and Numbers",
          date: "19-4-2024",
          status: "upcoming",
          prblm: "Solved",
          url: "https://www.google.com",
        },
        {
          topic: "Simplified Pronunciation",
          date: "22-4-2024",
          status: "upcoming",
          prblm: "Solved",
          url: "https://www.google.com",
        },
        {
          topic: "Everyday Conservation",
          date: "23-4-2024",
          status: "upcoming",
          prblm: "Solved",
          url: "https://www.google.com",
        },
        {
          topic: "The Cultural Center",
          date: "24-4-2024",
          status: "upcoming",
          prblm: "Solved",
          url: "https://www.google.com",
        },
        {
          topic: "Around the World with language",
          date: "25-4-2024",
          status: "upcoming",
          prblm: "Solved",
          url: "https://www.google.com",
        },
      ];

      setofflineclass(offline);
    } else if (name == "French A2,") {
      upcoming = [];
      setofflineclass(offline);
    } else if (name == "French B1") {
      upcoming = [];
      setofflineclass(offline);
    } else if (name == "French B2") {
      upcoming = [];
      setofflineclass(offline);
    } else {
      upcoming = [];
      setofflineclass(offline);
    }
  };

  const sendData = (name) => {
    setcurrenttopic(name);
    // setofflineclass(name);
    if (name == "French A1") {
      setsyllabus(fa1);
      upcoming = [
        {
          topic: "Basics of the language- salutations",
          date: "18-4-2024",
          status: "upcoming",
          prblm: "Solved",
          url: "https://www.google.com",
        },
        {
          topic: "Letters and Numbers",
          date: "19-4-2024",
          status: "upcoming",
          prblm: "Solved",
          url: "https://www.google.com",
        },
        {
          topic: "Simplified Pronunciation",
          date: "22-4-2024",
          status: "upcoming",
          prblm: "Solved",
          url: "https://www.google.com",
        },
        {
          topic: "Everyday Conservation",
          date: "23-4-2024",
          status: "upcoming",
          prblm: "Solved",
          url: "https://www.google.com",
        },
        {
          topic: "The Cultural Center",
          date: "24-4-2024",
          status: "upcoming",
          prblm: "Solved",
          url: "https://www.google.com",
        },
        {
          topic: "Around the World with language",
          date: "25-4-2024",
          status: "upcoming",
          prblm: "Solved",
          url: "https://www.google.com",
        },
      ];

      setclass(upcoming);
    } else if (name == "French A2,") {
      setsyllabus(fa2);
      upcoming = [];
      setclass(upcoming);
    } else if (name == "French B1") {
      setsyllabus(fb1);
      upcoming = [];
      setclass(upcoming);
    } else if (name == "French B2") {
      setsyllabus(fb2);
      upcoming = [];
      setclass(upcoming);
    } else {
      setsyllabus(fc1);
      upcoming = [];
      setclass(upcoming);
    }
  };

  const handelCuricullum = () => {
    if (opncrl) {
      setOpencrl(false);
    } else {
      setOpencrl(true);
    }
  };

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

  const switchpages = () => {
    if (stdymtrl == "recordedpage") {
      setstdymtrl("classes");
    } else {
      setstdymtrl("recordedpage");
    }
  };
  // const switchpages = () => {
  //   window.alert("Called");
  // };

  return (
    <div>
      {stdymtrl == "classes" ? (
        <div style={{ height: "100vh" }}>
          <h3 className="fw-bold pt-1">French Course</h3>
          <p style={{ fontSize: "18px" }}>
            You have access to 6 Modules in French Course
          </p>

          <div>
            <Syllabus settopic={sendData} offline={offlineclasses} />
          </div>

          {opncrl ? (
            <div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-6">
                    <h3 className="fw-bold ">{currenttopic}</h3>
                    <p style={{ fontSize: "18px" }}>
                      You have access to 35 Lessions in French A1 module
                    </p>
                  </div>
                  <div className="col-6">
                    <div className="text-end pt-3">
                      <button
                        type="button"
                        className="btn btn-outline-danger rounded-0"
                        onClick={handelCuricullum}
                        style={{ fontWeight: "semibold" }}
                      >
                        View Full Course Content
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code for the online and offline tab */}
              <ul className="nav nav-tabs">
                <li className="nav-item col-6 m-0 p-0">
                  {/* Add 'text-center' class to center align the links */}
                  <a
                    className={`nav-link ${
                      activeTab === "view1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("view1")}
                    href="#"
                    style={{
                      fontSize: "20px",
                      color: activeTab === "view1" ? "white" : "black",
                      backgroundColor: activeTab === "view1" ? "#4d58ff" : "",
                    }}
                  >
                    Upcoming Classes
                  </a>
                </li>
                <li className="nav-item col-6 m-0 p-0">
                  <a
                    className={`nav-link ${
                      activeTab === "view2" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("view2")}
                    href="#"
                    style={{
                      fontSize: "20px",
                      color: activeTab === "view2" ? "white" : "black",
                      backgroundColor: activeTab === "view2" ? "#4d58ff" : "",
                    }}
                  >
                    Recorded Classes
                  </a>
                </li>
              </ul>
              {/* Container to showcase offline and online classes */}
              <div className="container-fluid mt-3">
                {" "}
                {/* Use container-fluid for full width */}
                <div className="tab-content mt-2">
                  <div
                    className={`tab-pane fade ${
                      activeTab === "view1" ? "show active" : ""
                    }`}
                    id="view1"
                  >
                    <UpcommingClasses onlineClass={upcomingClass} />
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "view2" ? "show active" : ""
                    }`}
                    id="view2"
                  >
                    <RecordedClasses
                      recordedClass={offlineclass}
                      switchpages={switchpages}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <FullSyllabus
              currenttopic={currenttopic}
              handelCuricullum={handelCuricullum}
              completesylabus={completesylabus}
            />
          )}
        </div>
      ) : (
        <RecordedContent
          currenttopic={currenttopic}
          handelCuricullum={switchpages}
          offlineclass={offlineclass}
        />
      )}
    </div>
  );
};

export default Curicullum;
