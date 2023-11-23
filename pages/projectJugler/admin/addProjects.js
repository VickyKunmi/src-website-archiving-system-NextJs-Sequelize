import { Header } from "@/components/projectJugler/Header";
import { LeftNavbar } from "@/components/projectJugler/LeftNavbar";
import Head from "next/head";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import styles from "../../../styles/PJ/Project.module.css";
import "suneditor/dist/css/suneditor.min.css";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { addProject } from "@/lib/helper";
import { Success } from "@/components/admin/Success";
import axios from "axios";
import { getserver } from "@/config";
import { getSession, useSession } from "next-auth/react";
import { useRequireAuth } from "./auth";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export default function AddProject() {
  const [file, setFile] = useState(null);
  const [zipFile, setZipFile] = useState(null);
  const [studentname, setStudentNames] = useState(null);
  const [student_id, setStudentID] = useState(null);
  const [supervisorname, setSupervisorNames] = useState(null);
  const [year, setYear] = useState(null);
  const [abstract, setAbstract] = useState(null);
  const [objective, setObjectives] = useState(null);
  const [title, setTitle] = useState(null);
  const [language, setLanguage] = useState(null);
  const [savedNotify, setSavedNotify] = useState(null);
  // ---------------------------------------------------------------
  // const [FileZip, setFileZip] = useState(null);
  // const [FilePdf, setFilePdf] = useState(null);
  // --------------------------------------------------------------

  const handleOnChangeObjectives = (editorContent) =>
    setObjectives(editorContent);

  const router = useRouter();
  const queryClient = useQueryClient();
  const handleAddProject = async (model) => {
    const result = await addProject(model);
    const { isSaved } = result;
    if (isSaved) {
      setSavedNotify(true);
      setTimeout(() => {
        router.push("/projectJugler/admin/projects");
      }, 1000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("zipFile", zipFile);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dmkqhochv/image/upload",
        data
      );

      const response = await fetch("/api/Upload", {
        method: "POST",
        body: formData,
      });
      const { url } = uploadRes.data;
      console.log(response.ok, "response");
      if (response.ok && url) {
        const responseData = await response.json(); // Parse the response body as JSON
        const fileNames = responseData[0];
        console.log(fileNames, "file names");
        // console.log('File uploaded successfully');
        const model = {
          student_id,
          studentname,
          supervisorname,
          document: url,
          year,
          abstract,
          objective,
          title,
          language,
          file_name: fileNames,
        };
        await handleAddProject(model);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    setZipFile(e.target.files[0]);
  };

  const session = useRequireAuth();

  return (
    <>
      {session ? (
        <div className={styles.container}>
          <Head>
            <title>PJ</title>
            <meta name="description" content="CUG SRC web app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/srcLogo.jpg" />
          </Head>
          <LeftNavbar />
          <Header />
          {savedNotify && <Success message={"Project added successfully"} />}
          {/* <div className={styles.header}>Add new project</div> */}
          <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.content}>
                <hr className={styles.line} />

                <div className={styles.items}>
                  <input
                    type="text"
                    placeholder="Project title"
                    className={styles.title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Academic year"
                    className={styles.input}
                    onChange={(e) => setYear(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Language use"
                    onChange={(e) => setLanguage(e.target.value)}
                    className={styles.input}
                  />
                </div>
                <div className={styles.items}>
                  <input
                    type="text"
                    placeholder="Student name(s)"
                    onChange={(e) => setStudentNames(e.target.value)}
                    className={styles.input}
                    multiple
                  />
                  <input
                    type="text"
                    placeholder="Student index number(s)"
                    onChange={(e) => setStudentID(e.target.value)}
                    className={styles.input}
                    multiple
                  />
                </div>

                <div className={styles.items}>
                  <input
                    type="text"
                    placeholder="Supervisor name(s)"
                    onChange={(e) => setSupervisorNames(e.target.value)}
                    className={styles.input}
                    multiple
                  />
                </div>

                <div className={styles.items}>
                  <textarea
                    onChange={(e) => setAbstract(e.target.value)}
                    placeholder="Abstract goes here"
                    style={{
                      width: "600px",
                      height: "100px",
                      marginTop: "10px",
                    }}
                  />
                </div>
                <div className={styles.items}>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginTop: "30px",
                    }}
                  >
                    Objective(s)
                  </p>

                  <SunEditor
                    autoFocus={true}
                    onChange={handleOnChangeObjectives}
                    placeholder="Write project objectives here..."
                    lang="en"
                    height="300"
                    width="600"
                    setOptions={{
                      buttonList: [
                        [
                          "undo",
                          "redo",
                          "bold",
                          "underline",
                          "italic",
                          "strike",
                          "list",
                          "align",
                          "formatBlock",
                          "fontSize",
                          "table",
                          "font",
                          "save",
                          "fontColor",
                          "link",
                          "outdent",
                          "indent",
                          "fullScreen",
                          "showBlocks",
                          "codeView",
                          "preview",
                          "list",
                        ],
                      ],
                    }}
                  />
                </div>
                <div className={styles.items}>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginTop: "30px",
                    }}
                  >
                    Documentation (pdf file)
                  </p>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    placeholder="Upload documentation pdf"
                    accept="application/pdf"
                  />
                </div>

                <div className={styles.items}>
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginTop: "30px",
                    }}
                  >
                    Software (zip file)
                  </p>

                  <input
                    type="file"
                    onChange={handleFileChange}
                    placeholder="Upload project software zip"
                    // accept="application/pdf"
                  />
                </div>
                <hr className={styles.line} />
                <Button className={styles.but} type="submit">
                  Add
                </Button>
              </div>
            </form>
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

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session && session.user.role === 1)
    return {
      redirect: {
        destination: "/projectJugler/admin/login",
      },
    };
  return { props: { session } };
}
