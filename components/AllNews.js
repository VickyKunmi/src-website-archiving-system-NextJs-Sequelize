/* eslint-disable react/jsx-key */
import React from "react";
import styles from "../styles/News.module.css";
import Image from "next/image";
// import image from "../public/img/3.jpg";
import axios from "axios";

const AllNews = ({ news }) => {
  return (
    <div>
      {news.map((newsInfo) => (
        <div className={styles.new}>
          <Image
            src={newsInfo.img}
            alt=""
            width={400}
            height={150}
            className={styles.newsImg}
            // onClick={}
          />
          <div className={styles.newsInfo}>
            <div className={styles.newsCats}>
              <span className={styles.newsCat}>{newsInfo.category}</span>
              <span className={styles.newsCat} >{newsInfo.category}</span>

              <span className={styles.newsTitle} >{newsInfo.title}</span>
              <hr />
              <span className={styles.newsDate} >{newsInfo.date}</span>
              <p className={styles.newsDesc}>{newsInfo.news}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    
  );
};

export default AllNews;

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/News");
  return {
    props: {
      news: res.data,
    },
  };
};
