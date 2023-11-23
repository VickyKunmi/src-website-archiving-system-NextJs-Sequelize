/* eslint-disable react-hooks/rules-of-hooks */
import styles from "../../styles/admin/Committee.module.css";
import Head from "next/head";
import { LeftNavbar } from "@/components/admin/LeftNavbar";
import { Header } from "@/components/admin/Header";
import { Link } from "@mui/material";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRequireAuth } from "./auth";

function committee() {
const router = useRouter();
const session = useRequireAuth();

 


  return (

    <>
    {session ? (
    <div className={styles.container}>
      <Head>
        <title>Cug Src</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <LeftNavbar/>
      <Header/>
     
      <div className={styles.wrapper}>
        
        <Link href="/admin/committee/academic" className={styles.link}>
        <button className={styles.button}>Academic</button>
        </Link>
        <Link href="/admin/committee/edictorial" className={styles.link}>
        <button className={styles.button}>Editorial</button>
       </Link>
       <Link href="/admin/committee/estate" className={styles.link}>
        <button className={styles.button}>Estate</button>
       </Link>
       <Link href="/admin/committee/finance" className={styles.link}>
        <button className={styles.button}>Finance</button>
       </Link>
       <Link href="/admin/committee/judiciary" className={styles.link}>
        <button className={styles.button}>Judiciary</button>
       </Link>
       <Link href="/admin/committee/organizing" className={styles.link}>
        <button className={styles.button}>Organizing</button>
       </Link>
       <Link href="/admin/committee/procurement" className={styles.link}>
        <button className={styles.button}>Procurement</button>
       </Link>
       <Link href="/admin/committee/religious" className={styles.link}>
        <button className={styles.button}>Religious</button>
        </Link>
        {/* </div> */}
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
export const getServerSideProps = async (ctx) => {

  const session = await getSession(context);
  if(session && session.user.role === 2)
  return {
    redirect: {
      destination: "/admin/login"
    }
  
  }


  // const myCookie = ctx.req?.cookies || "";
  // if (myCookie.token !== process.env.TOKEN) {
  //   return {
  //     redirect: {
  //       destination: "/admin/login",
  //       permanent: false,
  //     },
  //   };
  // }
  // return {
  //   props: {},
  // };
};
export default committee;
