import { paginate } from "@/utils/paginate";
import Head from "next/head";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import SideBar from "@/components/SideBar";
import axios from "axios";
import Pagination from "@/components/Pagination";
import styles from "../styles/Event.module.css";

const Event = ({ event }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const paginatedPosts = paginate(event, currentPage, pageSize);

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
        <div className={styles.events}>
          <p>Page {currentPage}</p>
          {paginatedPosts.map((eventInfo) => (
            <div key={eventInfo.id} className={styles.event}>
              <Link href={`/Event/${eventInfo.id}`}>
                <Image
                  src={eventInfo.img}
                  alt="image"
                  width={800}
                  height={200}
                  className={styles.eventImg}
                />
              </Link>
              <div className={styles.eventInfo}>
                <div className={styles.eventcats}>
                  <Link href={`/Event/${eventInfo.id}`}>
                    <span className={styles.eventTitle}>{eventInfo.title}</span>
                  </Link>
                  <hr style={{ width: "98%" }} />
                  <span className={styles.eventDate}>{eventInfo.date}</span>
                  <div>
                    <Link href={`/Event/${eventInfo.id}`}>
                      <div className={styles.eventDesc}>
                        {eventInfo.description}
                      </div>
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
          items={event.length}
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
  const res = await axios.get(`http://localhost:3000/api/Events`);
  return {
    props: {
      event: res.data,
    },
  };
};

export default Event;
