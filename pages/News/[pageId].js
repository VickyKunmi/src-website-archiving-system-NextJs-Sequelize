import Navbar from "@/components/Navbar";
import axios from "axios";
import Head from "next/head";
// import { models } from "@/db/models";
// import styles from "../styles/News.module.css";
import styles from "../../styles/News.module.css";
import Image from "next/image";
import Footer from "@/components/Footer";
import { getserver } from "@/config";

// const {News} = models;

const NewsScreen = ({ news }) => {
  return (
    <div>
      <Head>
        <title>Cug Src</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <Navbar />
      
      <div className={styles.content}>
        <div key={news.id} className={styles.items}>
          <h1 className={styles.text}>{news.title}</h1>
          <h5 className={styles.date}>{news.date}</h5>
          <h5 className={styles.cat}>{news.category}</h5>
          </div>
          <div className={styles.item}>
          <Image
            src={news.img}
            alt=""
            width={1200}
            height={400}
            className={styles.newsImage}
          />
          </div>
          <div className={styles.writeup}>
            <div dangerouslySetInnerHTML={{ __html: news.news }} />
          </div>
      </div>
      <Footer/>
    </div>
  );
};
export default NewsScreen;

export const getServerSideProps = async (context) => {
  const { pageId } = context.query;
  // console.log(pageId)
  const res = await axios.get(
    `${getserver}/api/News/single?newsId=${pageId}`
  );
  // const news_data = await res;
  // console.log(res.data,'news data')
  return {
    props: {
      news: res.data,
    },
  };
  // }
};
