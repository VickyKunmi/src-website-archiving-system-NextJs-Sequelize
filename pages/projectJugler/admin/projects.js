/* eslint-disable react-hooks/rules-of-hooks */
import { Header } from "@/components/projectJugler/Header";
import { LeftNavbar } from "@/components/projectJugler/LeftNavbar";
import Head from "next/head";
import React from "react";
import styles from "../../../styles/PJ/Projects.module.css";
import { Alert, Button } from "@mui/material";
import { ProjectTable } from "@/components/projectJugler/projectTable";
import { Footer } from "@/components/projectJugler/Footer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from "react-query";
import { useRouter } from "next/router";
import { deleteProject, getProject } from "@/lib/helper";
import { deleteAction } from "@/redux/reducer";
import { BiCheck, BiX } from "react-icons/bi";
import { getserver } from "@/config";
import { getSession, useSession } from "next-auth/react";
import {useRequireAuth} from "./auth"





export default function projects({ records }) {

  


  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();

  const deletehandler = async () => {
    if (deleteId) {
      const deletedProject = await deleteProject(deleteId);
      if (deletedProject.isDeleted) {
        router.replace(`/projectJugler/admin/projects`);
      }
      await queryClient.prefetchQuery("project", getProject);
      dispatch(deleteAction(null));
    }
  };

  const cancelhandler = async () => {
    dispatch(deleteAction(null));
  };

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
      <LeftNavbar />
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Link href="/projectJugler/admin/addProjects">
            <Button className={styles.button}>Add Project</Button>
          </Link>
        </div>
        <div className={styles.right}>
          <input type="text" placeholder="Search" className={styles.input} />
          <FontAwesomeIcon
            icon={faSearch}
            style={{ width: "20px", fontSize: "16px" }}
          />
        </div>
        {deleteId ? DeleteComponent({ deletehandler, cancelhandler }) : <></>}
        <div className={styles.table}>
          <ProjectTable records={records} />
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

export const getServerSideProps = async (context) => {
 
  
  const res = await fetch(`${getserver}/api/Project`);
  const data = await res.json();
  console.log(data, "hxh");
  if (res.ok && data.length > 0) {

    return { props: { records: data } };
  } 
  // if (res.status === 404) return { props: { records: [] } };
  return { props: { records: [], session } };

};

function DeleteComponent({ deletehandler, cancelhandler }) {
  return (
    <div className={styles.delete}>
      <Alert className={styles.question}>Are you sure?</Alert>
      <Alert onClick={deletehandler} className={styles.yesBtn}>
        Yes
        <span className={styles.yesSpan}>
          <BiCheck className={styles.icondelete}></BiCheck>
        </span>
      </Alert>
      <Alert onClick={cancelhandler} className={styles.noBtn}>
        No
        <span className={styles.noSpan}>
          <BiX className={styles.icondelete}></BiX>
        </span>
      </Alert>
    </div>
  );
}

