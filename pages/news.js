import Footer from "@/components/Footer";
import styles from "../styles/News.module.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Image from "next/image";
import SideBar from "@/components/SideBar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import { paginate } from "@/utils/paginate";
import Link from "next/link";
import { getserver } from "@/config";

const News = ({ news }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const paginatedPosts = paginate(news, currentPage, pageSize);
  return (
    <div>
      <Head>
        <title>Cug Src</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.news}>
          <p>Page {currentPage} </p>
          {paginatedPosts.map(
            (newsInfo) => (
            <div key={newsInfo.id} className={styles.new}>
              <Link href={`/News/${newsInfo.id}`}>
              <Image
                src={newsInfo.img}
                alt=""
                width={800}
                height={200}
                className={styles.newsImg}
              />
              </Link>
              <div className={styles.newsInfo}>
                <div className={styles.newsCats}>
                  <Link href={`/News/${newsInfo.id}`}>
                  <span className={styles.newsCat}>{newsInfo.category}</span>
                  <span className={styles.newsCat}>{newsInfo.category}</span>

                  <span className={styles.newsTitle}>{newsInfo.title}</span>
                  </Link>
                  <hr style={{width: "98%"}} />
                  <span className={styles.newsDate}>{newsInfo.date}</span>
                 <div>
                 <Link href={`/News/${newsInfo.id}`}>
                  {/* <p className={styles.newsDesc}>{newsInfo.news}</p> */}
                  <div className={styles.newsDesc} dangerouslySetInnerHTML={{__html: newsInfo.news}} />
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
       <div className={styles.sidebar}>
       <SideBar className={styles.side} />
       </div>
      </div>
      <div className={styles.pagination}>
        <Pagination
          items={news.length}
          currentPage={currentPage} 
          pageSize={pageSize} 
          onPageChange={onPageChange}
        />
      </div>

      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(`${getserver}/api/News`);

  return {
    props: {
      news: res.data,
    },
  };
};

export default News;
