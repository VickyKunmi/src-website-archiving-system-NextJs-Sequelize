/* eslint-disable jsx-a11y/alt-text */
import { Header } from "@/components/admin/Header";
import { LeftNavbar } from "@/components/admin/LeftNavbar";
import Head from "next/head";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css"
import { Input, Paper } from "@mui/material";
// import { faBedPulse } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import styles from "../../styles/PJ/ViewProject.module.css";
import Image from "next/image";





export default function ViewEvent({ data }) {
  const { title, event, description, date, img} = data;
 


  const paperStyle ={
    padding: "1em",
    width: "80%",
    margin: "10px auto"
   
  }

  return (
    <Paper elevation={0} sx={paperStyle}>
     <div className={styles.items}>
     <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>Title</h4>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={title}
          readOnly
        />
      </Paper>
      <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>Date</h4>
        <Input
          type="text"
          name="date"
          placeholder="Date"
          defaultValue={date}
          readOnly
        />
      </Paper>
     </div>
     <div className={styles.items}>
     <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>Image</h4>
        <Image
         src={img}
         width={400}
         height={300}
         alt=""
        />
      </Paper>
      <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>Description</h4>
       <h5>{description}</h5>
      </Paper>
     </div>
     <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>objectives</h4>
      <div dangerouslySetInnerHTML={{__html: event}} />
      </Paper>

    </Paper>
  );
}

