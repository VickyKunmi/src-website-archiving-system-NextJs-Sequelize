/* eslint-disable react-hooks/rules-of-hooks */
import { Header } from "@/components/projectJugler/Header";
import { LeftNavbar } from "@/components/projectJugler/LeftNavbar";
import Head from "next/head";
import React from "react";
import styles from "../../../styles/PJ/students.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { CustomTable } from "@/components/global/CustomTable";
import { Button } from "@mui/material";
import Link from "next/link";
import { StudentTable } from "@/components/projectJugler/studentTable";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { getserver } from "@/config";
import { useRequireAuth } from "./auth";
const Tablehead = ["name", " id", "faculty"];
export default function students({records}) {

  const router = useRouter();
 
  const session = useRequireAuth();
 

  return (
   <>
        {session ? (

<div>
      <Head>
        <title>projectc jugler</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <LeftNavbar />
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {/* <div className={styles.left}>
            <Link href="/projectJugler/admin/addStudent">
              <Button className={styles.button}>Add student</Button>
            </Link>
          </div> */}
          <div className={styles.right}>
          
          </div>
        </div>
        <div className={styles.table}>
            <StudentTable records={records}/>
          </div>
      </div>
    </div>
     ) : (
      // Render content when the user is not authenticated
      <div>
        <alert>session expired! try to login to access page!</alert>
        {/* Render login form or redirect to the login page */}
      </div>
    )}
   </>
  );
}


export async function getServerSideProps(context) {
  const res = await fetch(`${getserver}/api/Project`);
  const data = await res.json();
  console.log(data, "hxh");
  if (res.ok && data.length > 0) {

    return { props: { records: data } };
  } 
  // if (res.status === 404) return { props: { records: [] } };
  return { props: { records: []} };
  // return {props: {session}}
}