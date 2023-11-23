import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../../styles/Src.module.css";
import Layout from "@/components/Layout";
import SideBar from "@/components/SideBar";

export default function role() {
  return (
    <div>
      <Head>
        <title>Cug Src</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <Layout />
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h1 className={styles.about}>Roles of SRC</h1>
          <div className={styles.contents}>
            <p className={styles.text}>
              The Students’ Representative Council (SRC) is the legitimate
              representative organ of the Student body, and it is the only
              recognized mouthpiece of the student body. It is a member of the
              Ghana National Union of Polytechnic Students (GNUPS).
            </p>
            <p className={styles.text}>
              The aims of the SRC, among others, are;
            </p>
            <ol className={styles.list}>
              <li className={styles.text}>
                To seek the general welfare of the students and to advise in
                relation to such matters concerning students welfare.
              </li>
              <li className={styles.text}>
                To work in all deliberations and in close harmony, with the
                authorities of the Polytechnic in all matters affecting the
                interests of the students.
              </li>
              <li className={styles.text}>
                To organize lectures, symposia, debates, voluntary work and
                other social activities in the interest of the students.
              </li>
            </ol>
          </div>
        </div>
        <div className={styles.rightContent}>
          <SideBar />
        </div>
      </div>
      <Footer />
    </div>
  );
}
