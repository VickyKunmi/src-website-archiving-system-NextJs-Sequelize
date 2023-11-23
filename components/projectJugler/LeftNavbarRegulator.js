import React from 'react'
import styles from "../../styles/PJ/LeftNavbar.module.css";
import { CustomIconName } from '../global/CustomIconName';


export const LeftNavbarRegulator = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h2 className={styles.text}>PJ Regulator</h2>
      </div>
      <div className={styles.wrapper}>
        <ul>
          <li className={styles.list}>
            {/* <CustomIconName Icon={fa} */}
          </li>
        </ul>
      </div>

    </div>
  )
}
