import { LeftNavbar } from "@/components/superAdmin/LeftNavbar";
// import { Header } from "@/components/superAdmin/header";
import Head from "next/head";
import React from "react";
import styles from "../../styles/PJ/students.module.css";
import Link from "next/link";
import { Button } from "@mui/material";
import { UserTable } from "@/components/superAdmin/userTable";
import { Header } from "@/components/superAdmin/Header";
import { getserver } from "@/config";
import { models } from "@/db/models";




export default function users({records}) {



  // const deleteUser = (id) => {
  //   axios
  //     .delete(`/api/user/${id}`)
  //     .then((response) => {
  //       // Handle success or update state if needed
  //       console.log("User deleted successfully!");
  //     })
  //     .catch((error) => {
  //       // Handle error if needed
  //       console.error("Error deleting user:", error);
  //     });
  // };



  return (
    <div>
      <Head>
        <title>CUG</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <LeftNavbar />
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.left}>
            <Link href="/superAdmin/addUser">
              <Button className={styles.button}>Add User</Button>
            </Link>
          </div>
        </div>
        <div className={styles.table}>
          <UserTable records={records}/>
        </div>
      </div>
    </div>
  );
}



export const getServerSideProps = async () => {
  const { Admins } = models;
  const records = await Admins.findAll();

  return {
    props: {
      records: JSON.parse(JSON.stringify(records)), // Pass the users' data as props
    },
  };
}
