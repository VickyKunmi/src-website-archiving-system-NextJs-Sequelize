/* eslint-disable react/jsx-key */
import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import axios from "axios";
import styles from "../../styles/Executives.module.css";
import Footer from "@/components/Footer";
import Image from "next/image";


export default function estate({estate}) {
  return (
    <div>
      <Head>
        <title>Cug Src</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <Navbar />
      <div className={styles.container}>
      <div className={styles.elements}>
        {estate.map((details) => (
           <div className={styles.items}>
           <Image
             src={details.img}
             alt=""
             width={200}
             height={200}
             className={styles.img}
           />
           <div className={styles.text}>
             <p className={styles.name}>{details.name}</p>
             <p className={styles.position}>{details.position}</p>
           </div>
         </div>
        ))}
      </div>
      </div>
      <Footer />
    </div>
  );
}


export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/EstateCommittee");
  return {
    props: {
      estate: res.data,
    },
  };
};