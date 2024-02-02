import React from "react";
import styles from "./CSS Modules/UpcommingClasses.module.css";

export default function Offlineclass({ offlineclass, sno }) {
  return (
    <>
      <tbody>
        <tr className={styles.contentsize}>
          <td>{sno + 1}</td>
          <td>{offlineclass.topic}</td>
          <td>{offlineclass.date}</td>
          <td>{offlineclass.status}</td>
          <td>{offlineclass.prblm}</td>
          <td>
            <a href={offlineclass.url} type="button" class="btn btn-primary">
              Open
            </a>
          </td>
        </tr>
      </tbody>
    </>
  );
}
