import Navbar from "@/components/projectJugler/Navbar";
import Head from "next/head";
import styles from "../../../../styles/PJ/Project.module.css";

import axios from "axios";
import { getserver } from "@/config";
import Footer from "@/components/projectJugler/Footer";
const ProjectScreen = ({ project }) => {
  const pdf = project.document
  return (
    <div>
      <Head>
        <title>Project jugler</title>
        <meta name="description" content="CUG SRC web app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/srcLogo.jpg" />
      </Head>
      <Navbar />
      <div className={styles.content}>
        <div key={project.id} className={styles.items}>
          <div className={styles.i}>
          <h2>{project.title} <span>{project.language}</span> </h2>
          <h4>{project.year}</h4>
          </div>
          {/* <h1>{project.language}</h1> */}
          <p>{project.abstract}</p>
          <div dangerouslySetInnerHTML={{ __html: project.objective }} className={styles.obj} />

          <iframe src={pdf} width={1300} height={800} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectScreen;

export const getServerSideProps = async (context) => {
  const { pageId } = context.query;
  console.log(pageId, "page id")
  const res = await axios.get(
    `${getserver}/api/Project/single/userside?projectId=${pageId}`
  );
  return {
    props: {
      project: res.data,
    }
  }
};
