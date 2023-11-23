import { Button, Input, Paper } from "@mui/material";
import "suneditor/dist/css/suneditor.min.css";
import dynamic from "next/dynamic";
import { getserver } from "@/config";
import { useState } from "react";
import { useRouter } from "next/router";
import { UploadImage, updateProjectById } from "@/lib/helper";
import { Success } from "../admin/Success";
import styles from "../../styles/PJ/ViewProject.module.css";


const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export function UpdateProject({ data, handleClose }) {
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

  const [newStudent_id, setStudentId] = useState(student_id);
  const [newStudent_name, setStudent_name] = useState(studentname);
  const [newsupervisorname, setSupervisorname] = useState(supervisorname);
  const [newTitle, setTitle] = useState(title);
  const [newAbstract, setAbstract] = useState(abstract);
  const [newLanguage, setLanguage] = useState(language);
  const [newObjectives, setObjectives] = useState(objective);
  const [newDocument, setDocument] = useState(document);
  const [newFile, setFile] = useState(file_name);
  const [newyear, setyear] = useState(year);
  const [savedNotify, setSavedNotify] = useState(null);

  const router = useRouter();
  const handleUpdateProject = async (models, id) => {
    const result = await updateProjectById({
      projectId: id,
      models,
    });
    if (result.isUpdated) {
      setSavedNotify(true);
      setTimeout(() => {
        handleClose();
        router.replace(`${getserver}/projectJugler/admin/projects`);
      }, 1000);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (document === newDocument && file_name === newFile) {
        const models = {
          student_id: newStudent_id,
          studentname: newStudent_name,
          supervisorname: newsupervisorname,
          title: newTitle,
          abstract: newAbstract,
          language: newLanguage,
          objective,
          newObjectives,
          document: newDocument,
          file_name: newFile,
          year: newyear,
        };
        return await handleUpdateProject(models, id);
      } else {
        const data = new FormData();
        data.append("file", newDocument);
        data.append("upload_preset", "uploads");
        const pdfUrl = await UploadImage(data);
        const response = await fetch("/api/Upload", {
          method: "POST",
          body: formData,
        });
        // const {url} = uploadRes.data;
        console.log(response.ok, "response");
        if (response.ok && pdfUrl) {
          const responseData = await response.json();
          const fileNames = responseData[0];
          const models = {
            student_id: newStudent_id,
            studentname: newStudent_name,
            supervisorname: newsupervisorname,
            title: newTitle,
            abstract: newAbstract,
            language: newLanguage,
            objective,
            newObjectives,
            document: pdfUrl,
            file_name: fileNames,
            year: newyear,
          };
          return await handleUpdateProject(models, id);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnChangeObjectives = (editorContent) =>
    setObjectives(editorContent);


    
  const paperStyle ={
    padding: "1em",
    width: "80%",
    margin: "10px auto"
   
  }

  return (
    <form onSubmit={handleUpdate}>
      <Paper elevation={0} sx={paperStyle}>
        <div>
          {savedNotify && <Success message={"Project updated successfully"} />}
        </div>
        <div className={styles.items}>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <h4>Title</h4>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            defaultValue={title}
            onInput={(e) => setTitle(e.target.value)}
          />
        </Paper>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <h4>Student ID</h4>
          <Input
            type="text"
            name="student_id"
            placeholder="Student Id"
            defaultValue={student_id}
            onInput={(e) => setStudentId(e.target.value)}
          />
        </Paper>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <h4>Student Name</h4>
          <Input
            type="text"
            name="studentname"
            placeholder="Student Name"
            defaultValue={studentname}
            onInput={(e) => setStudent_name(e.target.value)}
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
            onInput={(e) => setSupervisorname(e.target.value)}
          />
        </Paper>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <h4>Language used</h4>
          <Input
            type="text"
            name="language"
            placeholder="language used"
            defaultValue={language}
            onInput={(e) => setLanguage(e.target.value)}
          />
        </Paper>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <h4>Academic Year</h4>
          <Input
            type="text"
            name="year"
            placeholder="Year"
            defaultValue={year}
            onInput={(e) => setyear(e.target.value)}
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
            onInput={(e) => setAbstract(e.target.value)}
            className={styles.input}
          />
        </Paper>

        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <h4>objectives</h4>
          <SunEditor
            autoFocus={true}
            defaultValue={objective}
            onChange={handleOnChangeObjectives}
            className={styles.textarea}
            placeholder="Write project objectives here..."
            lang="en"
            height="300"
            // width="600"
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
        </Paper>
       <div className={styles.items}>
       <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <h4>Project Documentation</h4>
          <input
            // defaultValue={document}
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            placeholder="Upload documentation pdf"
            accept="application/pdf"
          />
        </Paper>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <h4>Project Software (click to download)</h4>
          <input
            // defaultValue={document}
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            placeholder="Upload zip folder"
            // accept="application/pdf"
            />
        </Paper>
       </div>
      </Paper>
      <Button type="submit">Update</Button>
    </form>
  );
}
