/* eslint-disable react-hooks/rules-of-hooks */
import { Header } from "@/components/admin/Header";
import { LeftNavbar } from "@/components/admin/LeftNavbar";
import Head from "next/head";
import { BiCheck, BiUserPlus, BiX } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { Table } from "@/components/admin/contactTable";
import { getserver } from "@/config";
import { deleteAction } from "@/redux/reducer";
import { Alert, Button } from "@mui/material";
import Link from "next/link";
import { deleteContact, getContacts } from "@/lib/helper";
import { useQueryClient } from "react-query";
import { useRequireAuth } from "./auth";

//styles
import styles from "../../styles/admin/Executives.module.css";
import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";

export default function contact({ records }) {
  // const visible = useSelector((state) => state.app.client.toggleForm);
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();

 


  const deletehandler = async () => {
    if (deleteId) {
      const deletedContact = await deleteContact(deleteId);
      if (deletedContact.isDeleted) {
        console.log(deletedContact.message);
        router.replace(`/admin/contact`);
      }
      await queryClient.prefetchQuery("contacts", getContacts);
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
          <Link href="/admin/addContact">
            <Button startIcon={<BiUserPlus />} className={styles.addExe}>
              Add Contact
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
  const res = await fetch(`${getserver}/api/Contact`);
  const data = await res.json();
  if (res.ok && data.length > 0) {
    return { props: { records: data } };
  }
  return { props: { records: [], session } };
};

function DeleteComponent({ deletehandler, cancelhandler }) {
  return (
    <div className={styles.delete}>
      <Alert className={styles.question}> Are you sure?</Alert>
      <Alert onClick={deletehandler} className={styles.yesBtn}>Yes
      <span className={styles.yesSpan}>
      <BiCheck className={styles.icondelete}></BiCheck>
          
        </span>
      </Alert>
      <Alert onClick={cancelhandler} className={styles.noBtn}>No
      <span className={styles.noSpan}>
      <BiX className={styles.icondelete}></BiX>
        </span>
      </Alert>
    </div>
  );
}
