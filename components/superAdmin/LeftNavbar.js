/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import styles from "../../styles/PJ/LeftNavbar.module.css";
import { CustomIconName } from "../global/CustomIconName";
import { faBook, faSignOut, faTachometerAlt, faUniversity, faUser } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRProject } from "@fortawesome/free-brands-svg-icons";

export const LeftNavbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h2 className={styles.text}>CUG</h2>
      </div>
      <div className={styles.wrapper}>
        <ul>
          <li className={styles.list}>
            <CustomIconName Icon={faTachometerAlt} title={"Dashboard"} />
            <FontAwesomeIcon icon={faTachometerAlt}  style={{ width: "18px", cursor: "pointer" }} />
            <a href="/superAdmin">Dashboard</a>
          </li>
          <li className={styles.list}>
            <CustomIconName Icon={faUser} title={"User"} />
                <FontAwesomeIcon icon={faUser}  style={{ width: "18px", cursor: "pointer" }}  />
            <a href="/superAdmin/users">
            Users
            </a>
              
            
          </li>
          <li className={styles.list}>
            <CustomIconName Icon={faBook} title={"Projects"} />
            <FontAwesomeIcon icon={faBook}  style={{ width: "18px", cursor: "pointer" }}  />

            <a href="/superAdmin/projects">Faculties</a>
          </li>
          <li className={styles.list}>
            <CustomIconName Icon={faUniversity} title={"Department"} />
            <FontAwesomeIcon icon={faUniversity}  style={{ width: "18px", cursor: "pointer" }}  />

            <a href="/superAdmin/departments">Department</a>
          </li>
          
          <li className={styles.list}>
            <CustomIconName Icon={faSignOut} title={"Logout"} />
            <FontAwesomeIcon icon={faSignOut}  style={{ width: "18px", cursor: "pointer" }}  />

            <a href="/superAdmin/login">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
