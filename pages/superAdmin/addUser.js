import React, { use, useState } from "react";
import styles from "../../styles/PJ/Student.module.css";
import Head from "next/head";
import { LeftNavbar } from "@/components/superAdmin/LeftNavbar";
// import { Header } from "@/components/superAdmin/header";
import { Header } from "@/components/superAdmin/Header";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { Success } from "@/components/admin/Success";
export default function AddUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(1);
  const [savedNotify, setSavedNotify] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/AdminRegister", {
        method: "POST",
        body: JSON.stringify({ username, password, role }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setSavedNotify(true);
        setTimeout(() => {
          router.replace("/superAdmin/users");
        },1000);
      } else {
        alert("Registration failed");
      }
      // alert
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  return (
    <div>
      <Head>
        <title>Cug Src</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <LeftNavbar />
      <Header />
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit} className={styles.form}> 
        {savedNotify && <Success message={"Admin added successfully"}/>}
        <div className={styles.content}>
          <hr className={styles.line} />
          <div className={styles.items}>
            <input
              type="text"
              placeholder="Username"
              className={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className={styles.input}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className={styles.items}>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={styles.input}
            >
              <option value={1}>SRC admin</option>
              <option value={2}>PJ admin</option>
            </select>
          </div>
          <hr className={styles.line} />
          <Button className={styles.but} type="submit">Add</Button>
        </div>
        </form>
      </div>
    </div>
  );
}




export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if(myCookie.token !== process.env.TOKEN){
    return {
      redirect: {
        destination: "/superAdmin/login",
        permanent: false,
      }
    }
  }
  return{
    props: {},
  }
}

