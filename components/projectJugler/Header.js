import React from 'react'
import styles from "../../styles/PJ/Header.module.css";
import Image from 'next/image';
import srclogo from "../../public/srclogo.png"
export const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.image}>
            <Image width={50} height={50} src={srclogo} alt='' />
        </div>
        <div className={styles.wrapper}>
            <div className={styles.title}>
            <h2>Catholic University student project jugler</h2>
            </div>
        </div>
    </div>
  )
}
