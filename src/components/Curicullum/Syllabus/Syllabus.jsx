import { useState, useEffect } from "react";
import axios from "axios";
import SyllabusCard from "./SyllabusCard";

export default function Syllabus({ settopic, offline }) {
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
      name: "French A1",
      desc: "All topics of French A1",
      url: "",
      topics: title,
    },
    {
      name: "French A2,",
      desc: "All topics of French A2",
      url: "",
      topics: titledata,
    },
    {
      name: "French B1",
      desc: "All topics of French B1",
      url: "",
      topics: titledata,
    },
    {
      name: "French B2",
      desc: "All topics of French B2",
      url: "",
      topics: titledata,
    },
    {
      name: "French C1",
      desc: "All topics of French C1",
      url: "",
      topics: titledata,
    },
  ];
  return (
    <div className="container mb-5">
      <div className="row">
        {syllabus.map((value) => {
          return (
            <SyllabusCard
              syllabus={value}
              settopic={settopic}
              offline={offline}
            />
          );
        })}
      </div>
    </div>
  );
}
