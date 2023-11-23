import { Header } from "@/components/projectJugler/Header";
import { LeftNavbar } from "@/components/projectJugler/LeftNavbar";
import Head from "next/head";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import styles from "../../../styles/PJ/Student.module.css";
import "suneditor/dist/css/suneditor.min.css";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { addStudent } from "@/lib/helper";
import { Success } from "@/components/admin/Success";
import { getSession, useSession } from "next-auth/react";
import { useRequireAuth } from "./auth";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export default function AddStudent() {
  const [name, setName] = useState(null);
  const [faculty, setFaculty] = useState(null);
  const [department, setDepartment] = useState(null);

  const [studentId, setStudentId] = useState(null);
  const [admissionYear, setAdmissionYear] = useState(null);
  const [submissionDate, setSubmissionDate] = useState(null);
  const [supervisorName, setSupervisorName] = useState(null);
  const [supervisorComment, setSupervisorComment] = useState(null);
  const [graduatingYear, setGraduatingYear] = useState(null);
  const [savedNotify, setSavedNotify] = useState(null);

  const router = useRouter();
  const handleAddStudent = async (model) => {
    const result = await addStudent(model);
    const {isSaved} = result;
    if(isSaved) {
      setSavedNotify(true);
      setTimeout(() => {
        router.push("/projectJugler/students")
      }, 500)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const model = {
        name,
        studentId,
        admissionYear,
        submissionDate,
        supervisorName,
        supervisorComment,
        graduatingYear,
        faculty,
        department,
      }
      await handleAddStudent(model)
    }catch(err){
      console.log(err)
    }
  }
  

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
      {savedNotify && <Success message={"Student added to record successfully"}/>}
      
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <hr className={styles.line}/>

          <form onSubmit={handleSubmit}>
          <div className={styles.items}>
            <input
              type="text"
              placeholder="Student ID"
                onChange={(e) => setStudentId(e.target.value)}
                className={styles.input}
            />
            <input
              type="text"
              placeholder="Student name"
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
            />
          </div>
          <div className={styles.items}>
          <input
              type="text"
              placeholder="Admission year"
              className={styles.input}
              onChange={(e) => setAdmissionYear(e.target.value)}

            />
            <input
              type="text"
              placeholder="Faculty"
              className={styles.input}
              onChange={(e) => setFaculty(e.target.value)}

            />
            <input
              type="text"
              placeholder="Department"
              className={styles.input}
              onChange={(e) => setDepartment(e.target.value)}

            />
             <input
              type="text"
              placeholder="Graduating year"
              className={styles.input}
              onChange={(e) => setGraduatingYear(e.target.value)}

            />
             <input
              type="date"
              placeholder="Project submission date"
              className={styles.input}
              onChange={(e) => setSubmissionDate(e.target.value)}

            />
          </div>

          <div className={styles.items}>
          <input
              type="text"
              placeholder= "Supervisor's name"
              className={styles.input}
              onChange={(e) => setSupervisorName(e.target.value)}

            />
             <textarea
              type="text"
              placeholder="Supervisor's comment"
              className={styles.input}
              onChange={(e) => setSupervisorComment(e.target.value)}

            />
           
          </div>
         
          <hr className={styles.line}/>
          <Button className={styles.but} type="submit">Add</Button>
          </form>
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



