/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef, useState } from "react";
import Head from "next/head";
import { LeftNavbar } from "@/components/admin/LeftNavbar";
import { Header } from "@/components/admin/Header";

import Img from "../../public/img/bg.jpg";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/admin/NewsForm.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { UploadImage, addEvent } from "@/lib/helper";
import { Success } from "@/components/admin/Success";
import { Button } from "@mui/material";
import { BiImageAdd } from "react-icons/bi";
import { Editor } from "@/components/global/Editor";
import { getSession, useSession } from "next-auth/react";
import { useRequireAuth } from "./auth";
// import image from 'suneditor/src/plugins/dialog/image';
// import list from 'suneditor/src/plugins/submenu/list';
// import { plugins } from "eslint-config-next";
// import plugins from "suneditor/src/plugins";


export default function addEvents() {

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [event, setEvent] = useState(null);
  const [description, setDescription] = useState(null);
  const [date, setDate] = useState(null);
  const [savedNotify, setSavedNotify] = useState(null);

  const router = useRouter();
  const handleOnChange = (editorContent) => setEvent(editorContent)

  const handleAddEvent = async (model) => {
    const result = await addEvent(model);
    const { isSaved } = result;
    if (isSaved) {
      setSavedNotify(true);
      setTimeout(() => {
        router.push("/admin/events");
      }, 500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventData = new FormData();
    eventData.append("file", file);
    eventData.append("upload_preset", "uploads");
    try {
      const imageUrl = await UploadImage(eventData);
      if (imageUrl) {
        const model = {
          title,
          event,
          date,
          description,
          img: imageUrl,
        };
        await handleAddEvent(model);
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

      {savedNotify && <Success message={"Event added successfully!"} />}

      <div className={styles.content}>
        <div className={styles.header}>Add Event</div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Image
            src={Img}
            alt=""
            width={500}
            height={200}
            className={styles.img}
          />
          <div className={styles.item}>
            <label htmlFor="fileInput">
              <FontAwesomeIcon icon={faImage} className={styles.icon} />
            </label>
            <input
              name="img"
              id="fileInput"
              type="file"
              className={styles.imgText}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              name="title"
              className={styles.title}
              placeholder="Title"
              autoFocus={true}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Button
              startIcon={<BiImageAdd />}
              className={styles.btn}
              type="submit"
            >
              Publish
            </Button>
          </div>
          <div className={styles.date}>
            <input
              type="date"
              name="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className={styles.text}>
            <textarea
              name="discription"
              className={styles.textInput}
              placeholder="Short Description of the event...."
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        <div className={styles.textSpace}>
          <Editor setEvent={handleOnChange}/>
        </div>
        </form>
        <div>
          {event}
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
  const session = await getSession(context);
  if(session && session.user.role === 2)
  return {
    redirect: {
      destination: "/admin/login"
    }
  
  }
  return {props: {session}}
}