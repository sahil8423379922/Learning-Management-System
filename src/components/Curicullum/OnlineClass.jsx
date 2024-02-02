import React from "react";
import styles from "./CSS Modules/UpcommingClasses.module.css";

export default function OnlineClass({ onlineclass, sno }) {
  return (
    <>
      <tbody>
        <tr className={styles.contentsize}>
          <td>{sno + 1}</td>
          <td>{onlineclass.topic}</td>
          <td>{onlineclass.date}</td>
          <td>{onlineclass.status}</td>
          <td>{onlineclass.prblm}</td>
          <td>
            <a href={onlineclass.url} type="button" class="btn btn-secondary">
              Join Class
            </a>
          </td>
        </tr>
      </tbody>
    </>
  );
}
