import React from "react";
import styles from "./Curicullum.module.css";

export default function SyllabusCard({ syllabus }) {
  return (
    <>
      <div className={` card mx-2  ${styles.cardtemplate}`}>
        <div>
          <p className={styles.cardfont}>{syllabus.name}</p>
          <p className={styles.cardpara}>{syllabus.desc}</p>

          <a
            href={`/TopicWise/${syllabus.name}`}
            type="button"
            class="btn btn-outline-success position-absolute bottom-0 start-50 translate-middle-x mb-2 px-5"
          >
            open
          </a>
        </div>
      </div>
    </>
  );
}
