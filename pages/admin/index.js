/* eslint-disable react-hooks/rules-of-hooks */
import styles from "../../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import { LeftNavbar } from "@/components/admin/LeftNavbar";
import { Header } from "@/components/admin/Header";
import { Button } from "@mui/material";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRequireAuth } from "./auth";
import { useState, useEffect } from "react";
import axios from "axios";
const index = () => {
  const router = useRouter();
  const session = useRequireAuth();
  const [clickCounts, setClickCounts] = useState({});

  useEffect(() => {
    // Fetch the click counts from the backend
    const fetchClickCounts = async () => {
      try {
        const response = await axios.get("/api/clickCounts");
        setClickCounts(response.data);
      } catch (error) {
        console.error("Error fetching click counts:", error);
      }
    };

    fetchClickCounts();
  }, []);
  return (
    <>
      {session ? (
        <div className={styles.container}>
          <Head>
            <title>Cug Src</title>
            <meta name="description" content="CUG SRC web app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/srcLogo.jpg" />
          </Head>
          <div className={styles.container}>
            <LeftNavbar />
            <Header />
            <div className={styles.wrapper}>
              <div className={styles.head}>
                <h3>
                  Welcome back Admin <span>Let start work</span>
                </h3>
                <Link href={"/admin/login"}>
                  <li type="button" className={styles.logout}>
                    Logout
                  </li>
                </Link>
              </div>
              <div className={styles.dashboard}>
                <h5>Admin dashboard</h5>
                <div className={styles.countItem}>
                  <h1>Click Counts:</h1>
                  <ul>
                    {Object.entries(clickCounts).map(([buttonName, count]) => (
                      <div className={styles.count}>
                        <li key={buttonName} className={styles.countList}>
                          {buttonName}: {count}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
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

export default index;
