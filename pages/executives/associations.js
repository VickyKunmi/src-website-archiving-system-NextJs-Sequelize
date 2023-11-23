/* eslint-disable react/jsx-key */
import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import axios from "axios";
//stylesheet
import styles from "../../styles/Associations.module.css";
import SideBar from "@/components/SideBar";


export default function associations({associations}) {
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
        <div className={styles.write}>
        <p className={styles.texts}>There are various associations in the in CUG. Below are the list os the associations.</p>
        <ol>
          <li className={styles.list}>International student association (ISA)</li>
          <li className={styles.list}>Chipset</li>
          <li className={styles.list}>International student association (ISA)</li>
          <li className={styles.list}>International student association (ISA)</li>
          <li className={styles.list}>International student association (ISA)</li>
          <li className={styles.list}>International student association (ISA)</li>
          <li className={styles.list}>International student association (ISA)</li>

        </ol>
      </div>
        <div>
        {associations.map((association) => (
           <div className={styles.items}>
           <Image
             src={association.img}
             alt=""
             width={200}
             height={200}
             className={styles.img}
           />
           <div className={styles.text}>
               <p className={styles.name}>{association.name}</p>
               <p className={styles.position}>{association.position}</p>
               <p className={styles.faculty}>{association.faculty}</p>
           </div>
         </div>


))}
        </div>
      </div>
      <div className={styles.bar}>
          <SideBar/>
        </div>
        </div>
      <Footer />
    </div>
  );
}



export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/Associations");
  return {
    props: {
      associations: res.data,
    },
  };
};

