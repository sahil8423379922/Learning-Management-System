import { useNavigate } from "react-router-dom";
import React from "react";
import styles from "./Curicullum.module.css";

export default function SyllabusCard({ syllabus, settopic, offline }) {
  const navigate = useNavigate();

  console.log("Data Received = " + syllabus.topics);

  return (
    <>
      <div className={` card mx-1 ${styles.cardtemplate}`}>
        <div>
          <p className={styles.cardfont}>{syllabus.name}</p>
          <p className={styles.cardpara}>{syllabus.desc}</p>

          <button
            onClick={() => settopic(syllabus.name)}
            type="button"
            class="btn btn-outline-success py-1 mt-2"
            style={{ borderRadius: 0 }}
          >
            View Module
          </button>
        </div>
      </div>
    </>
  );
}
