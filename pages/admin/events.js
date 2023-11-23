/* eslint-disable react-hooks/rules-of-hooks */
// import styles from "../../styles/admin/Events.module.css";
import styles from "../../styles/admin/News.module.css";
import Head from "next/head";
import { LeftNavbar } from "@/components/admin/LeftNavbar";
import { Header } from "@/components/admin/Header";
import Link from "next/link";
import { Alert, Button } from "@mui/material";
import { BiCheck, BiUserPlus, BiX } from "react-icons/bi";
import dynamic from "next/dynamic";
import "suneditor/dist/css/suneditor.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from "react-query";
import { useRouter } from "next/router";
import { deleteEvent, getEvents } from "@/lib/helper";
import { deleteAction } from "@/redux/reducer";
import { EventTable } from "@/components/admin/eventTable";
import { getserver } from "@/config";
import { getSession, useSession } from "next-auth/react";
import { useRequireAuth } from "./auth";



const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

function events({ records }) {
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();

  const deletehandler = async () => {
    if (deleteId) {
      const deletedEvent = await deleteEvent(deleteId);
      if (deletedEvent.isDeleted) {
        router.replace(`/admin/events`);
      }
      await queryClient.prefetchQuery("event", getEvents);
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
          <Link href="/admin/addEvents">
            <Button startIcon={<BiUserPlus />} className={styles.addNews}>
              Add Events
            </Button>
          </Link>
          <div className={styles.table}>
            {deleteId ? (
              DeleteComponent({ deletehandler, cancelhandler })
            ) : (
              <></>
            )}
            <div className={styles.table}>
             <EventTable records={records} />
            </div>
          </div>
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

  const res = await fetch(`${getserver}/api/Events`);
  const data = await res.json();

  if (res.ok && data.length > 0) {
    return { props: { records: data } };
  }
  return { props: { records: [] , session} };
};

function DeleteComponent({deletehandler, cancelhandler}){
  return(
    <div className={styles.delete}>
      <Alert className={styles.question}>Are you sure?</Alert>
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
  )
}

export default events;
