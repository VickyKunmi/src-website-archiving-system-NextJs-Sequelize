/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Head from "next/head";
//sylesheet
import styles from "../../../styles/admin/Committee.module.css";
import { LeftNavbar } from "@/components/admin/LeftNavbar";
import { Header } from "@/components/admin/Header";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from "react-query";
import { useRouter } from "next/router";
import { deleteEditorialCommittee, getEditorialCommittee } from "@/lib/helper";
import { deleteAction } from "@/redux/reducer";
import Link from "next/link";
import { Alert, Button } from "@mui/material";
import { BiCheck, BiUserPlus, BiX } from "react-icons/bi";
import { getserver } from "@/config";
import { Table } from "@/components/admin/editorialCommitteeTable";
import { useRequireAuth } from "../auth";

export default function edictorial({ records }) {
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const session = useRequireAuth();

  const deletehandler = async () => {
    if (deleteId) {
      const deletedEditorialCommittee = await deleteEditorialCommittee(deleteId);
      if (deletedEditorialCommittee.isDeleted) {
        router.replace(`/admin/committee/academic`);
      }
      await queryClient.prefetchQuery(
        "editorialCommittee",
        getEditorialCommittee
      );
      dispatch(deleteAction(null));
    }
  };
  const cancelhandler = async () => {
    dispatch(deleteAction(null));
  };

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
          <Link href="/admin/addEditorialCommittee">
            <Button startIcon={<BiUserPlus />} className={styles.addExe}>
              Add Editorial Committee
            </Button>
          </Link>
        </div>
        {deleteId ? DeleteComponent({deletehandler, cancelhandler}): <></>}
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


export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if(myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false
      }
    };
  }
  const res = await fetch(`${getserver}/api/EditorialCommittee`);
  const data = await res.json();
  if (res.ok && data.length > 0) {
    return { props: { records: data } };
  }
  return { props: { records: [] } };
}


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
