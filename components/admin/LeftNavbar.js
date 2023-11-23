/* eslint-disable @next/next/no-html-link-for-pages */
import styles from "../../styles/admin/LeftNavbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faUser,
  faNewspaper,
  faUsers,
  faSignOutAlt,
  faUniversity,
  faTachometerAlt,
  faContactBook,
} from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";
// import { Image } from "@chakra-ui/react";
import Image from "next/image";

import srclogo from "../../public/srclogo.png";
import { Link } from "@chakra-ui/react";
import { CustomIconName } from "../global/CustomIconName";

export const LeftNavbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/admin">
          <Image
            src={srclogo}
            alt="logo"
            className={styles.img}
            width={50}
            height={50}
          />
        </Link>
        <Link href="/admin">
          <h2 className={styles.text}>CUG SRC</h2>
        </Link>
      </div>
      <div className={styles.wrapper}>
        <ul>
          <li>
            <CustomIconName Icon={faTachometerAlt} title={"Dashboard"} />

            <a href="/admin">Dashboard</a>
          </li>

          <li>
            <CustomIconName Icon={faUserCircle} title={"Executives"} />

            <a href="/admin/executives">Executives</a>
          </li>
          <li>
            <CustomIconName
              Icon={faUserCircle}
              title={"Association Executive"}
            />

            <a href="/admin/associations">Association Executives</a>
          </li>
          <li>
            <CustomIconName Icon={faUser} title={"Committees"} />

            <a href="/admin/committee">Committees</a>
          </li>
          <li>
            <CustomIconName Icon={faNewspaper} title={"News"} />

            <a href="/admin/news">News</a>
          </li>
          <li>
            <CustomIconName Icon={faUsers} title={"Events"} />

            <a href="/admin/events">Events</a>
          </li>
          <li>
            <CustomIconName Icon={faContactBook} title={"Contacts"} />

            <a href="/admin/contact">Contacts</a>
          </li>
          <li>
            <CustomIconName Icon={faSignOutAlt} title={"Logout"} />

            <a href="/admin/login">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
