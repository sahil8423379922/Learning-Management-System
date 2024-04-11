import React from "react";
import Home from "../flow/home";
import Course from "../flow/Course";
import Progress from "../flow/Progress";
import Payment from "../flow/Payment";
import DoubtSupport from "../flow/DoubtSupport";
import style from "./SideBar.module.css";

export default function Sidebar(props) {
  const handleItemClick = (componentName) => {};
  return (
    <div className="sidebar">
      <ul class="list-group  mx-auto">
        <Home handleItemClick={props.onItemClick} />
        <hr className={style.divider} />
        <Course handleItemClick={props.onItemClick} />
        <hr />
        <Progress handleItemClick={handleItemClick} />
        <hr />
        <Payment handleItemClick={handleItemClick} />
        <hr />
        <DoubtSupport handleItemClick={handleItemClick} />
      </ul>
    </div>
  );
}
