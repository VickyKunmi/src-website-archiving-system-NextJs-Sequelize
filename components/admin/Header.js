import styles from "../../styles/admin/Header.module.css";

import React from "react";
import Image from "next/image";
import srclogo from "../../public/srclogo.png";
export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image width={50} height={50} src={srclogo} alt="" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>
            Hello, <span>Admin</span>
          </h2>
          <p>Welcome to the board.</p>
        </div>
      </div>
    </div>
  );
};
