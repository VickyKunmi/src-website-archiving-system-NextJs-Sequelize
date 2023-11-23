import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { LeftNavbar } from "@/components/superAdmin/LeftNavbar";
// import { Header } from "@/components/superAdmin/header";
import { Header } from "@/components/superAdmin/Header";

const index = () => {
  return (
    <div className={styles.stuff}>
      <Head>
        <title>Cug</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <LeftNavbar />
      <Header />
    </div>
  );
};


export default index;




export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  if(myCookie.token !== process.env.TOKEN){
    return {
      redirect: {
        destination: "/superAdmin/login",
        permanent: false,
      }
    }
  }
  return{
    props: {},
  }
}


