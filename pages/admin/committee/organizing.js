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
import { deleteOrganizingCommittee } from "@/lib/helper";
import { getOrganizingCommittee } from "@/lib/helper";
import { deleteAction } from "@/redux/reducer";
import { BiCheck, BiUserPlus, BiX } from "react-icons/bi";
import { Alert, Button } from "@mui/material";
import { getserver } from "@/config";
import Link from "next/link";
import { Table } from "@/components/admin/organizingCommitteTable";
import { useRequireAuth } from "../auth";

export default function organizing({ records }) {
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();

  const deletehandler = async () => {
    if (deleteId) {
      const deletedOrganizingCommittee = await deleteOrganizingCommittee(
        deleteId
      );
      if (deletedOrganizingCommittee.isDeleted) {
        router.replace(`/admin/committee/organizing`);
      }
      await queryClient.prefetchQuery(
        "organizingCommittee",
        getOrganizingCommittee
      );
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
      <div className={styles.item}>
        <Link href="/admin/addOrganizingCommittee">
          <Button startIcon={<BiUserPlus />} className={styles.addExe}>
            Add Organizing Committee
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
  const res = await fetch(`${getserver}/api/OrganizingCommittee`);
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