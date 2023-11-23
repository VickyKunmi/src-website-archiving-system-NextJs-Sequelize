/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import styles from "../../styles/PJ/LeftNavbar.module.css";
import { CustomIconName } from "../global/CustomIconName";
import { faBook, faSignOut, faTachometerAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRProject } from "@fortawesome/free-brands-svg-icons";

export const LeftNavbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h2 className={styles.text}>CUG PJ</h2>
      </div>
      <div className={styles.wrapper}>
        <ul>
          <li className={styles.list}>
            <CustomIconName Icon={faTachometerAlt} title={"Dashboard"} />
            <FontAwesomeIcon icon={faTachometerAlt}  style={{ width: "18px", cursor: "pointer" }} />
            <a href="/projectJugler/admin">Dashboard</a>
          </li>
          <li className={styles.list}>
            <CustomIconName Icon={faUser} title={"Students"} />
                <FontAwesomeIcon icon={faUser}  style={{ width: "18px", cursor: "pointer" }}  />
            <a href="/projectJugler/admin/students">
            Students
            </a>
              
            
          </li>

          {/* <li className={styles.list}>
            <CustomIconName Icon={faUser} title={"Lecturers"} />
                <FontAwesomeIcon icon={faUser}  style={{ width: "18px", cursor: "pointer" }}  />
            <a href="/projectJugler/admin/lecturers">
            Lecturers
            </a>
              
            
          </li> */}
          <li className={styles.list}>
            <CustomIconName Icon={faBook} title={"Projects"} />
            <FontAwesomeIcon icon={faBook}  style={{ width: "18px", cursor: "pointer" }}  />

            <a href="/projectJugler/admin/projects">Projects</a>
          </li>
          <li className={styles.logOut}>
            <CustomIconName Icon={faSignOut} title={"Logout"} />
            <FontAwesomeIcon icon={faSignOut}  style={{ width: "18px", cursor: "pointer" }}  />

            <a href="/projectJugler/admin/login">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
