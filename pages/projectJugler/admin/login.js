import React, { useState } from "react";
import styles from "../../../styles/admin/Login.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      username,
      password,
      role: 2,
      redirect: false,
    });

    if (result?.error) {
      console.error("Login error:", result.error);
    } else if (result?.ok) {
      router.push("/projectJugler/admin");
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Cug Src</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1>Admin Login</h1>
        <div className={styles.wrappers}>
          <input
            placeholder="Username"
            type="text"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            placeholder="Password"
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className={styles.button} type="submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
