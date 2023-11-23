import React from "react";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Head from "next/head";
import styles from "../../styles/Faculties.module.css";
import FacultyFeatured from "@/components/FacultyFeatured";

function cems() {
  return (
    <div>
      <Head>
        <title>Cug Src</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <Layout />
      <FacultyFeatured />
      <div className={styles.container}>
        <h1 className={styles.title}>CEMS FACULTY</h1>
        <p className={styles.describe}>
          CEMS which is an accronmy for Computing Engineering and Mathematical
          Sciences is a faculty in CUG. The faculty has two (2) basic
          objectives:
          <br />
          To develop a dedicated and innovative Faculty of researchers and
          engineers that will train graduates for the competitive job market in
          Ghana.
          <br />
          To develop graduates that are comfortable working in such disciplines
          as Computer Engineering, Software Development, Business Information
          Systems, Network Engineering, etc; To provide computer/network service
          in data processing, communication and information technology support
          for CUCG in areas such as Research and Development, the University
          Library, Administration, Student Academic Records, Accounting and
          Computing.
          <br />
          <br />
          The CEMS Programme is designed to be relevant and innovative and able
          to produce graduates with a strong foundation in Information and
          Communication Sciences and Technology with the technical skills to
          provide solutions to scientific and technological problems in industry
          and business. As the Faculty matures, it will develop additional
          departments. The present Faculty Programme offers courses that might
          properly belong to a Department of Computer Science and are designated
          as Computer Science (CS) courses.
        </p>
        <br />
        <h3 className={styles.titles}>Available courses in CEMS</h3>
        <div className={styles.describe}>
          <ul>
            <li className={styles.list}>Computer Science</li>
            <li className={styles.list}>Acturial Science</li>
            <li className={styles.list}>Information Technology</li>
            <li className={styles.list}>Computer Science</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default cems;
