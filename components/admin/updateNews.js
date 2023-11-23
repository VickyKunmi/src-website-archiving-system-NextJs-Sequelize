/* eslint-disable @next/next/no-img-element */
import { updateProjectById } from "@/lib/helper";
import { useRouter } from "next/router";
import React from "react";
import { Success } from "./Success";
import { Button, Input, Paper } from "@mui/material";
import { Editor } from "../global/Editor";
import "suneditor/dist/css/suneditor.min.css";
import dynamic from "next/dynamic";
import { BiBrush } from "react-icons/bi";

const SunEditor = dynamic(() => import("suneditor-react"), {
    ssr: false,
  });


export default function UpdateNews({ handleClose, data }) {
  const { id, title, img, date, news, category } = data;
  const [newTitle, setnewTitle] = useState(title);
  const [newImg, setnewImg] = useState(img);
  const [newDate, setnewDate] = useState(date);
  const [newNews, setnewNews] = useState(news);
  const [newCategory, setnewCategory] = useState(category);
  const [savedNotify, setSavedNotify] = useState(null);

  const router = useRouter();
  const handleOnChange = (editorContent) => setnewNews(editorContent);

  const handleUpdateProject = async (models, id) => {
    const result = await updateProjectById({
      projectId: id,
      models,
    });
    if (result.isUpdated) {
      setSavedNotify(true);
      setTimeout(() => {
        handleClose();
        router.replace(router.asPath);
      }, 500);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (newImg === img) {
        const models = {
          title: newTitle,
          img: newImg,
          date: newDate,
          news: newNews,
          category: newCategory,
        };
        return handleUpdateProject(models, id);
      } else {
        const imgData = new FormData();
        imgData.append("file", newImg);
        imgData.append("upload_preset", "uploads");
        const imageUrl = await UploadImage(imgData);
        if (imageUrl) {
          const models = {
            title: newTitle,
            img: imageUrl,
            date: newDate,
            news: newNews,
            category: newCategory,
          };
          return await handleUpdateProject(models, id);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
        <div>
            {savedNotify && (<Success message={"Project updated successfully"}/>)}

        </div>
        <Paper elevation={0} sx={{ p: "1em" }}>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            defaultValue={title}
            onInput={(e) => setnewTitle(e.target.value)}
          />
        </Paper>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <Input
            type="text"
            name="date"
            placeholder="Date"
            defaultValue={date}
            onInput={(e) => setnewDate(e.target.value)}
          />
        </Paper>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <Input
            type="text"
            name="category"
            placeholder="Category"
            defaultValue={category}
            onInput={(e) => setnewCategory(e.target.value)}
          />
        </Paper>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <img src={img} alt="" className={styles.images} />

          <Input
            type="file"
            name="image"
            placeholder="Image"
            onChange={(e) => setnewImg(e.target.files[0])}
          />
        </Paper>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
            <SunEditor 
             autoFocus={true}
             defaultValue={news}
             onInput={(e) => setnewNews(e.target.Value)}

             setOptions={{
                buttonList: [
                    [
                      // plugins.image,
                      "undo",
                      "redo",
                      "bold",
                      "audio",
                      "video",
                      "underline",
                      // "image",
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
                      // "imageGallery"
                      "list",
                      
                      
                    ],
                ]
             }}
             />
        </Paper>
        <Button type="submit" startIcon={<BiBrush />}>
            Update
        </Button>
        </Paper>
    </form>
  )
}
