/* eslint-disable react-hooks/exhaustive-deps */
import { Header } from "@/components/projectJugler/Header";
import { LeftNavbar } from "@/components/projectJugler/LeftNavbar";
import Head from "next/head";
import React, { useEffect } from "react";
import styles from "@/styles/PJ/User.module.css";
// import { UserTable } from "@/components/projectJugler/userTable";
import { UserTable } from "@/components/superAdmin/userTable";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";
import { useRequireAuth } from "./auth";

// export default function users() {
const User = () => {
  const router = useRouter();
  const session = useRequireAuth();

  return (
    <>
      {session ? (
        <div>
          <Head>
            <title>Cug Src</title>
            <meta name="description" content="CUG SRC web app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/srcLogo.jpg" />
          </Head>
          <LeftNavbar />
          <Header />
          <div className={styles.wrapper}>
            <div className={styles.table}>
              <UserTable />
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
};

export default User;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session && session.user.role === 1)
    return {
      redirect: {
        destination: "/projectJugler/admin/login",
      },
    };
  return { props: { session } };
}
