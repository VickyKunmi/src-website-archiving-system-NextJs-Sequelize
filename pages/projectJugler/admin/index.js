/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Header } from "@/components/projectJugler/Header";
import { LeftNavbar } from "@/components/projectJugler/LeftNavbar";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRequireAuth } from "./auth";
import { Alert } from "@mui/material";
import axios from "axios";

const index = () => {
  const router = useRouter();

  const session = useRequireAuth();

  const [clickCounts, setClickCounts] = useState({});

  useEffect(() => {
    // Fetch the click counts from the backend
    const fetchClickCounts = async () => {
      try {
        const response = await axios.get("/api/pjClickCounts");
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
        // Render content when the user is authenticated
        <div className={styles.stuff}>
          <Head>
            <title>Cug Src</title>
            <meta name="description" content="CUG SRC web app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/srcLogo.jpg" />
          </Head>
          {/* <select>
            <option value="name">Name</option>
            <option value="name">class</option>
            <option value="name">Age</option>
            <option value="name">Gender</option>
        </select> */}
          <LeftNavbar />
          <Header />

          <div className={styles.welcome}>
            <h3>Welcome to CUG Project Achiving System (Project Jugler)</h3>
          </div>
          <br />
          <hr />
          <div className={styles.wrappers}>
            <h1>Click Counts:</h1>
            {Object.entries(clickCounts).map(([buttonName, count]) => (
            <div className={styles.items} key={buttonName}>

              
                <FontAwesomeIcon
                  icon={faDashboard}
                  style={{
                    width: "20%",
                    marginLeft: "10px",
                    marginTop: "5px",
                    color: "goldenrod",
                  }}
                  />
                <div className={styles.countList}>
                  <h3>{buttonName}</h3>
                  <h5>{count}</h5>
                </div>
              </div>
                  
            ))}
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
