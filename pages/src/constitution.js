import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "../../styles/Home.module.css";
import SideBar from "@/components/SideBar";
// import srcConstitution from "../../public/srcConstitution.pdf";

export default function constitution() {
  return (
    <div>
      <Head>
        <title>Cug Src</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <Navbar />
      <div className={styles.containers}>
      <div className={styles.leftContent}>
        <iframe src={"../srcConstitution.pdf"} width={900} height={800}/>
        </div>
        <div className={styles.rightContent}>
        <SideBar/>
        </div>
      </div>
      <Footer />
    </div>
  );
}
