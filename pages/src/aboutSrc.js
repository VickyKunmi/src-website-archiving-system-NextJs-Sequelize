import React from "react";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import SideBar from "@/components/SideBar";
function aboutSrc() {
  return (
    <div >
      <Head>
        <title>Cug Src</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <Layout />
      <div className={styles.containers}>
        <div className={styles.leftContent}>
          <h1 className={styles.about}>About Us </h1>
          <br />
          <div className={styles.contents}>
            <h3 className={styles.title}>History of CUG SRC</h3>

            <p className={styles.text}>Empty</p>
            <br />
            <h3 className={styles.title}>Vision</h3>

            <p className={styles.text}>
              Right-Honourable Speaker, Hon. Clerk, His Lordship-Chief Justice,
              Executives(SRC) Present, Executives (GNUPS) present, Hon. Members
              of the General Assembly, alumni and ex-officios present, all
              protocol observed. In the light of all this, we still believe the
              SRC must survive to promote the course of students come what may.
              Hon. Members, it takes you and me here today, to uphold that
              clarion call. People call it ‘difficult times’ but we named it
              ‘our year to survive and to create a hallmark of excellence’. An
              excellence that seeks to invest into students for a mutual benefit
              worth their contributions to the council and to empower our women
              (ladies) of today via symposiums, seminars and summits to inspire
              them into leadership, in this vain in history, we had our First
              Female Vice President, Her Excellency Miss. Hilda Nartekuor Nartey
              and the first female Clerk of the General Assembly, Hon. Deborah
              Naa Dodoa Doodu.
            </p>
            <br />
            <h3 className={styles.title}>Mission</h3>
            <p className={styles.text}>
              As a council upon numerous deliberation and checks as a team prior
              to disparities in our campaign message saw the uniqueness to have
              had a unique collection of linked activities that is goal-oriented
              to meet the growing needs of our students for this academic year
              as follows:
            </p>
            <ol className={styles.list}>
              <li className={styles.text}>
                To initiate a hostel project to provide accommodation for our
                students and to create space for stores and offices (SRC, GNUPS
                and Departmental Heads), this is given under the hand of the
                School of Engineering (students and lecturers) with the help of
                the Polytechnic’s authorities (Dean of students affairs and the
                Development Officer) and with proven estate developers and
                contractors via conditions of mortgage or B.O.T (Build, Operate
                and Transfer).
              </li>
              <li className={styles.text}>
                Purchase two mini buses to run a shuttle (transportation, to and
                fro) for our students and for administrative errands for the
                council.
              </li>
              <li className={styles.text}>
                Design and construct a billboard to be installed at the
                polytechnic’s junction to aid our image screening campaign.
              </li>
              <li className={styles.text}>
                Create a website for the council to aid with the dissemination
                of information and communication with our students, sister
                Polytechnics and other stakeholders(alumni) given under the hand
                of alumni computer science students with the help of the
                webmaster at the ICT directorate.
              </li>
            </ol>
            <p className={styles.text}>
              Administratively as part of our project is to draft working
              documents like an organizational structure (SRC), Financial Manual
              and newsletters with post sheets (large size) for official notices
              in hand written.
            </p>
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

export default aboutSrc;
