/* eslint-disable 
react/jsx-key */
import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SideBar from "../../components/SideBar";
import axios from "axios";
//stylesheeet
import styles from "../../styles/Executives.module.css";
// import { Image } from "@chakra-ui/react";
import Image from "next/image";

export default function srcExecutives({ executives }) {
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
          {executives.map((executive) => (
            <div className={styles.items}>
              <Image
                src={executive.img}
                alt=""
                width={200}
                height={200}
                className={styles.img}
              />
              <div className={styles.text}>
                <p className={styles.name}>{executive.name}</p>
                <p className={styles.position}>{executive.position}</p>
                <p className={styles.faculty}>{executive.faculty}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bar}>
          <SideBar />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/Executives");
  return {
    props: {
      executives: res.data,
    },
  };
};
