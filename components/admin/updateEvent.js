import { useRouter } from "next/router";
import { useState } from "react";
import "suneditor/dist/css/suneditor.min.css";
import dynamic from "next/dynamic";
import { updateEventById } from "@/lib/helper";
import { Success } from "./Success";
import { Button, Input, Paper } from "@mui/material";
import { BiBrush } from "react-icons/bi";
import styles from "../../styles/PJ/ViewProject.module.css";


const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export default function UpdateEvent({ handleClose, data }) {
  const { id, title, event, description, date, img } = data;

  const [newTitle, setnewTitle] = useState(title);
  const [newImg, setnewImg] = useState(img);
  const [newDate, setnewDate] = useState(date);
  const [newEvent, setnewEvent] = useState(event);
  const [newDescription, setnewDescription] = useState(description);
  const [savedNotify, setSavedNotify] = useState(null);

  const paperStyle ={
    padding: "1em",
    width: "80%",
    margin: "10px auto"
   
  }

  const router = useRouter();
  const handleOnChange = (editorContent) => setnewNews(editorContent);

  const handleUpdateEvent = async (models, id) => {
    const result = await updateEventById({
      eventId: id,
      models,
    });
    if (result.isUpdates) {
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
          event: newEvent,
          description: newDescription,
        };
        return handleUpdateEvent(models, id);
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
            event: newEvent,
            description: newDescription,
          };
          return handleUpdateEvent(models, id);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
        <div>
            {savedNotify && (<Success message={"Event updated successfully"}/>)}
        </div>
        <Paper elevation={0} sx={paperStyle}>
     <div className={styles.items}>
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
            type="date"
            name="date"
            placeholder="Date"
            defaultValue={date}
            onInput={(e) => setnewDate(e.target.value)}
          />
        </Paper>
     </div>
     <div className={styles.items}>
     <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <textarea
            type="text"
            name="description"
            placeholder="escription"
            defaultValue={title}
            onInput={(e) => setnewDescription(e.target.value)}
          />
        </Paper>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <Input
            type="file"
            name="img"
            // placeholder="Date"
            // defaultValue={img}
            onInput={(e) => setnewImg(e.target.value)}
          />
        </Paper>
     </div>
        </Paper>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
            <SunEditor 
             autoFocus={true}
             defaultValue={event}
             onInput={(e) => setnewEvent(e.target.Value)}

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
             <Button type="submit" startIcon={<BiBrush />}>
            Update
        </Button>
        </Paper>
    </form>
  )
}
