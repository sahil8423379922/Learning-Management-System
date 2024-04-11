import { useNavigate } from "react-router-dom";
import React from "react";
import styles from "./Curicullum.module.css";

export default function SyllabusCard({ syllabus }) {
  const navigate = useNavigate();

  console.log("Data Received = " + syllabus.topics);

  const sendData = () => {
    const dataToSend = syllabus;
    const serializedData = encodeURIComponent(JSON.stringify(dataToSend));
    navigate(`/TopicWise/${serializedData}`);
  };

  return (
    <>
      <div className={` card mx-2  ${styles.cardtemplate}`}>
        <div>
          <p className={styles.cardfont}>{syllabus.name}</p>
          <p className={styles.cardpara}>{syllabus.desc}</p>

          <button
            onClick={sendData}
            type="button"
            class="btn btn-outline-success position-absolute bottom-0 start-50 translate-middle-x mb-2 px-5"
          >
            open
          </button>
        </div>
      </div>
    </>
  );
}
