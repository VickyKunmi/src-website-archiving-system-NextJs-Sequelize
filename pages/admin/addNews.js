import React, { useState } from "react";
import Head from "next/head";
import { LeftNavbar } from "@/components/admin/LeftNavbar";
import { Header } from "@/components/admin/Header";
import image from "../../public/img/bg.jpg";
import styles from "../../styles/admin/NewsForm.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import { BiImageAdd } from "react-icons/bi";
import { useRouter } from "next/router";
import { addNews, UploadImage } from "@/lib/helper";
import { Success } from "@/components/admin/Success";
import axios from "axios";
import { Editor } from "@/components/global/Editor";
import { getSession, useSession } from "next-auth/react";
import { useRequireAuth } from "./auth";

export default function AddNews() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [news, setNews] = useState(null);
  const [date, setDate] = useState(null);
  const [category, setCategory] = useState(null);
  const [savedNotify, setSavedNotify] = useState(null);

  const router = useRouter();

  const handleOnChange = (editorContent) => setNews(editorContent);
  const handleAddNews = async (model) => {
    const result = await addNews(model);
    const { isSaved } = result;
    if (isSaved) {
      setSavedNotify(true);
      setTimeout(() => {
        router.push("/admin/news");
      }, 500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newsData = new FormData();
    newsData.append("file", file);
    newsData.append("upload_preset", "uploads");
    try {
      // console.log(newsData)
      const imageUrl = await UploadImage(newsData);
      if (imageUrl) {
        const model = {
          title,
          news,
          date,
          category,
          img: imageUrl,
        };
        await handleAddNews(model);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const session = useRequireAuth();


  return (
    <>
    {session ? (
    <div>
      <Head>
        <title>Cug Src</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <LeftNavbar />
      <Header />
      {savedNotify && <Success message={"News added successfully!"} />}

      <div className={styles.content}>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.header}>
          Add News
          <span className={styles.button}>
            {" "}
            <Button
              startIcon={<BiImageAdd />}
              className={styles.btn}
              type="submit"
            >
              Publish
            </Button>
          </span>
        </div>
          <div className={styles.items}>
            <input
              name="title"
              className={styles.title}
              placeholder="Title"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="date"
              name="date"
              className={styles.dateset}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className={styles.items}>
            <input
              type="text"
              name="category"
              className={styles.category}
              placeholder="Category"
              onChange={(e) => setCategory(e.target.value)}
            />
            <label>
              <FontAwesomeIcon icon={faImage} className={styles.icon} />
            </label>
            <input
              name="img"
              type="file"
              className={styles.imgText}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className={styles.date}></div>
          <div className={styles.text}>
            <Editor setEvent={handleOnChange} />
          </div>
        </form>
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
  const session = await getSession(context);
  if(session && session.user.role === 2)
  return {
    redirect: {
      destination: "/admin/login"
    }
  
  }
  return {props: {session}}
}
