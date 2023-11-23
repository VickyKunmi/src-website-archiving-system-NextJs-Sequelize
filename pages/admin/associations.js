/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Head from "next/head";
import { LeftNavbar } from "@/components/admin/LeftNavbar";
import { Header } from "@/components/admin/Header";
import styles from "../../styles/admin/Executives.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getserver } from "@/config";
import { deleteAction } from "@/redux/reducer";
import { Button } from "@mui/material";
import Link from "next/link";
import { deleteAssociation, getAssociations } from "@/lib/helper";
import { useQueryClient } from "react-query";
import { useRouter } from "next/router";
import { BiCheck, BiUserPlus, BiX } from "react-icons/bi";
import { Table } from "@/components/admin/associationTable";
import { getSession, useSession } from "next-auth/react";
import { useRequireAuth } from "./auth";






export default function associations({ records }) {
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();

  const deletehandler = async () => {
    if (deleteId) {
      const deletedAssociation = await deleteAssociation(deleteId);
      if (deletedAssociation.isDeleted) {
        console.log(deletedAssociation.message);
        router.replace(`/admin/associations`);
      }
      await queryClient.prefetchQuery("associations", getAssociations);
      dispatch(deleteAction(null));
    }
  };
  const cancelhandler = async () => {
    console.log("cancel");
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
        <div className={styles.item}>
          <Link href="/admin/addAssociation">
            <Button startIcon={<BiUserPlus />} className={styles.addExe}>
              Add Association Executive
            </Button>
          </Link>
        </div>
        {deleteId ? DeleteComponent({ deletehandler, cancelhandler }) : <></>}
        <div className={styles.table}>
          <Table records={records} />
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
  const res = await fetch(`${getserver}/api/Associations`);
  const data = await res.json();
  if (res.ok && data.length > 0) {
    return { props: { records: data } };
  }
  return { props: { records: [] } };
};

function DeleteComponent({ deletehandler, cancelhandler }) {
  return (
    <div className={styles.delete}>
      <button className={styles.question}>Are you sure?</button>
      <button onClick={deletehandler} className={styles.yesBtn}>
        Yes
        <span className={styles.yesSpan}>
          <BiX className={styles.icondelete}></BiX>
        </span>
      </button>

      <button onClick={cancelhandler} className={styles.noBtn}>
        No
        <span className={styles.noSpan}>
          <BiCheck className={styles.icondelete}></BiCheck>
        </span>
      </button>
    </div>
  );
}



