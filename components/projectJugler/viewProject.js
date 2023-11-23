import { Input, Paper } from "@mui/material";
import "suneditor/dist/css/suneditor.min.css";
import dynamic from "next/dynamic";
import { getserver } from "@/config";
import styles from "../../styles/PJ/ViewProject.module.css";


const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
  });
  

export function ViewProject({ data }) {
  const {
    id,
    student_id,
    studentname,
    supervisorname,
    title,
    abstract,
    language,
    objective,
    document,
    file_name,
    year,
  } = data;

  const downloadLink = `${getserver}/api/Download?fileName=${file_name}`;

  const paperStyle ={
    padding: "1em",
    width: "80%",
    margin: "10px auto"
   
  }



  return (
    <Paper elevation={0} sx={paperStyle}>
     <div className={styles.items}>
     <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>Title</h4>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          defaultValue={title}
          readOnly
        />
      </Paper>
      <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>Student ID</h4>
        <Input
          type="text"
          name="student_id"
          placeholder="Student Id"
          defaultValue={student_id}
          readOnly
        />
      </Paper>
      <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>Student Name</h4>
        <Input
          type="text"
          name="studentname"
          placeholder="Student Name"
          defaultValue={studentname}
          readOnly
        />
      </Paper>
     </div>
      <div className={styles.items}>
      <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>Supervisor Name</h4>
        <Input
          type="text"
          name="supervisorname"
          placeholder="Supervisor's name"
          defaultValue={supervisorname}
          readOnly
        />
      </Paper>
      <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>Language used</h4>
        <Input
          type="text"
          name="language"
          placeholder="language used"
          defaultValue={language}
          readOnly
        />
      </Paper>
      <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>Academic Year</h4>
        <Input
          type="text"
          name="year"
          placeholder="Year"
          defaultValue={year}
          readOnly
        />
      </Paper>
      </div>
      <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>Abstract</h4>
        <textarea
          type="text"
          name="abstract"
          placeholder="abstract"
          defaultValue={abstract}
          className={styles.input}
          readOnly
        />
      </Paper>


      <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>objectives</h4>
      <div dangerouslySetInnerHTML={{__html: objective}} />
      </Paper>
      <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>Project Documentation</h4>
      <iframe src={document} width={900} height={800}  />
      </Paper>
      <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>Project Software (click to download)</h4>
      <a href={downloadLink}>Download Zip file</a>
      </Paper>
    </Paper>
  );
}
