import Head from "next/head";
import Navbar from "@/components/Navbar";
import styles from "../../styles/Event.module.css";
import Image from "next/image";
import axios from "axios";
import Footer from "@/components/Footer";



const EventScreen = ({ event }) => {
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
        <div key={event.id} className={styles.items}>
          <h1 className={styles.text}>{event.title}</h1>
          <h1 className={styles.date}>{event.date}</h1>
          {/* <h1 className={styles.text}>{event.title}</h1> */}
        </div>
        <div className={styles.item}>
          <Image
            src={event.img}
            alt="image"
            width={1200}
            height={400}
            className={styles.eventImage}
          />
        </div>
        <div className={styles.writeup}>
          <div dangerouslySetInnerHTML={{ __html: event.event }} />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default EventScreen;

export const getServerSideProps = async (context) => {
  const { pageId } = context.query;
  const res = await axios.get(
    `http://localhost:3000/api/Events/single?eventId=${pageId}`
  );
  return {
    props: {
      event: res.data,
    },
  };
};
