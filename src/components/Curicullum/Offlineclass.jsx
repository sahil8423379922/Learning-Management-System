import React from "react";
import styles from "./CSS Modules/UpcommingClasses.module.css";
import { Link } from "react-router-dom";

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
            <Link to={offlineclass.url} type="button" class="btn btn-primary">
              Open
            </Link>
          </td>
        </tr>
      </tbody>
    </>
  );
}
