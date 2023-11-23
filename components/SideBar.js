import React from 'react'
import styles from "../styles/SideBar.module.css";
import Image from 'next/image';
import srcLogo from "../public/img/srclogo.png";
import { Icon } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>SRC</span>
        <Image className={styles.image} src={srcLogo} width={300} height={300} alt='' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet lacus sed nunc tincidunt finibus. </p>
      <div className={styles.sidebarItem}>
      <span className={styles.sidebarTitle}>FACULTY PROJECTS</span>
      <ul className={styles.sidebarList}>
       
        <Link href="/projectJugler/u/login">
          <h4 className={styles.button}>Click here to check past student project work</h4>

        </Link>

      </ul>
      </div>
      <div className={styles.sidebarItem}>
      <span className={styles.sidebarTitle}>FOLLOW US</span>
      <div className={styles.sidebarSocial}>
        <FontAwesomeIcon className={styles.sidebarIcon} icon={faFacebook}/>
        <FontAwesomeIcon className={styles.sidebarIcon} icon={faWhatsapp}/>
        <FontAwesomeIcon className={styles.sidebarIcon} icon={faTwitter} />
        <FontAwesomeIcon className={styles.sidebarIcon} icon={faInstagram} />
      </div>

      </div>
      </div>
    </div>
  )
}
