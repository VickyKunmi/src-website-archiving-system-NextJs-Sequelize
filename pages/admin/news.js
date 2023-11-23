/* eslint-disable react-hooks/rules-of-hooks */
import styles from "../../styles/admin/News.module.css";
import Head from "next/head";
import { getserver } from "@/config";
import { LeftNavbar } from "@/components/admin/LeftNavbar";
import { Header } from "@/components/admin/Header";
import Link from "next/link";
import { Alert, Button } from "@mui/material";
import { BiUserPlus } from "react-icons/bi";
import { NewsTable } from "../../components/admin/NewsTable";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { deleteAction } from "@/redux/reducer";
import { deleteNews, getNews } from "@/lib/helper";
import { BiX, BiCheck } from "react-icons/bi";
import { getSession, useSession } from "next-auth/react";
import { useRequireAuth } from "./auth";


export default function news({ records }) {
  const deleteId = useSelector((state) => state.app.client.deleteId);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const session = useRequireAuth();

  const deletehandler = async () => {
    if (deleteId) {
      const deletedNews = await deleteNews(deleteId);
      if (deletedNews.isDeleted) {
        console.log(deletedNews.message);
        router.replace(`/admin/news`);
      }
      await queryClient.prefetchQuery("news", getNews);
      dispatch(deleteAction(null));
    }
  };
  const cancelhandler = async () => {
    console.log("cancel");
    dispatch(deleteAction(null));
  };


      return (
        <>
      {session ? (

        <div className={styles.container}>
          <Head>
            <title>Cug Src</title>
            <meta name="description" content="CUG SRC web app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/srcLogo.jpg" />
          </Head>
          <LeftNavbar />
          <Header />

          <div className={styles.wrapper}>
            <div className={styles.item}>
              <Link href="/admin/addNews">
                <Button startIcon={<BiUserPlus />} className={styles.addNews}>
                  Add News
                </Button>
              </Link>
            </div>
            {deleteId ? (
              DeleteComponent({ deletehandler, cancelhandler })
            ) : (
              <></>
            )}
            <div className={styles.table}>
              <NewsTable records={records} />
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
  };

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (session && session.user.role === 2)
    return {
      redirect: {
        destination: "/admin/login",
      },
    };

  const res = await fetch(`${getserver}/api/News`);
  const data = await res.json();
  if (res.ok && data.length > 0) {
    return { props: { records: data } };
  }
  // return {props: {session}}
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
