import React from "react";
import SyllabusCard from "./SyllabusCard";

export default function Syllabus() {
  var syllabus = [
    {
      name: "Advanced DSA",
      desc: "All topics of Data Structure and Algorithm",
      url: "",
    },
    {
      name: "Beginner Course,",
      desc: "Basics topics of programming and other important concepts",
      url: "",
    },
    {
      name: "System Design",
      desc: "System Designing concepts to build scalable systems and Applications",
      url: "",
    },
    {
      name: "Project",
      desc: "Industry Level Real time Projects based on MERN Technology",
      url: "",
    },
    {
      name: "Advanced DSA",
      desc: "All topics of Data Structure and Algorithm",
      url: "",
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
