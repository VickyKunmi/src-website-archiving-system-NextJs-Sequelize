import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import Featured from "@/components/Featured";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";

import { useState, useEffect } from "react";
import axios from "axios";



export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>CUG SRC</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <Layout />
     <div className={styles.content}>
     <div className={styles.left}>
    
      <Featured />
      <Intro />
     </div>
     <div className={styles.right}>
      <SideBar/>
     </div>
     </div>
      <Footer />
    </div>
  );
}
