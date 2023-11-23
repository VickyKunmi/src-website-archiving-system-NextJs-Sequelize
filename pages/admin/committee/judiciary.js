/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Head from 'next/head';
import { LeftNavbar } from '@/components/admin/LeftNavbar';
import { Header } from '@/components/admin/Header';

//sylesheet
import styles from "../../../styles/admin/Committee.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useQueryClient } from 'react-query';
import { deleteJudiciaryCommittee, getJudiciaryCommittee } from '@/lib/helper';
import { deleteAction } from '@/redux/reducer';
import Link from 'next/link';
import { Alert, Button } from '@mui/material';
import { BiCheck, BiUserPlus, BiX } from 'react-icons/bi';
import { getserver } from '@/config';
import { Table } from '@/components/admin/judiciaryCommitteeTable';
import { useRouter } from 'next/router';


export default function judiciary({records}) {
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryCLient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();

  const deletehandler = async () => {
    if(deleteId) {
      const deletedJudiciaryCommittee = await deleteJudiciaryCommittee(deleteId);
      if(deletedJudiciaryCommittee.isDeleted) {
        router.replace(`/admin/committee/judiciary`);
      }
      await queryCLient.prefetchQuery(
        "judiciaryCommittee",
        getJudiciaryCommittee
      )
      dispatch(deleteAction(null));
    }
  }
  const cancelhandler = async () => {
    dispatch(deleteAction(null));
  }




  return (
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
          <Link href="/admin/addJudiciaryCommittee">
            <Button startIcon={<BiUserPlus />} className={styles.addExe}>Add Judiciary Committe</Button>
          </Link>
        </div>
        {deleteId ? DeleteComponent({deletehandler, cancelhandler}): <></>}
        <div className={styles.table}>
          <Table records={records} />
        </div>
      </div>
    </div>
  )
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
  const res = await fetch(`${getserver}/api/JudiciaryCommittee`);
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