import { useState, useEffect } from "react";
import axios from "axios";
import SyllabusCard from "./SyllabusCard";

export default function Syllabus() {
  var titledata = [];
  //var title = [];
  var data;
  var state = true;
  var [title, setData] = useState([]);

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

  var syllabus = [
    {
      name: "Advanced DSA",
      desc: "All topics of Data Structure and Algorithm",
      url: "",
      topics: title,
    },
    {
      name: "Beginner Course,",
      desc: "Basics topics of programming and other important concepts",
      url: "",
      topics: titledata,
    },
    {
      name: "System Design",
      desc: "System Designing concepts to build scalable systems and Applications",
      url: "",
      topics: titledata,
    },
    {
      name: "Project",
      desc: "Industry Level Real time Projects based on MERN Technology",
      url: "",
      topics: titledata,
    },
    {
      name: "Advanced DSA",
      desc: "All topics of Data Structure and Algorithm",
      url: "",
      topics: titledata,
    },
  ];
  return (
    <div className="container mb-5">
      <div className="row">
        {syllabus.map((value) => {
          return <SyllabusCard syllabus={value} />;
        })}
      </div>
    </div>
  );
}
