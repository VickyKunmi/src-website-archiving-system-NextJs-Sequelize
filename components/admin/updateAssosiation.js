/* eslint-disable @next/next/no-img-element */
import { BiBrush } from "react-icons/bi";
import { Button, Input, Paper } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { UploadImage, updateAssociationById } from "@/lib/helper";
import { useRouter } from "next/router";
import { Success } from "./Success";
//stylesheet
import styles from "../../styles/admin/Table.module.css";

export function UpdateAssociation({ handleClose, data }) {
  const { id, name, faculty, position, img } = data;
  const [newName, setnewName] = useState(name);
  const [newFaculty, setnewFaculty] = useState(faculty);
  const [newPosition, setnewPosition] = useState(position);
  const [newImg, setnewImg] = useState(img);
  const [savedNotify, setSavedNotify] = useState(null);
  // const [defaultImage, setDefaultImg] = useState(img);

  const router = useRouter();

  const handleUpdateAssociation = async (models, id) => {
    const result = await updateAssociationById({
      associationId: id,
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
    // upload image first
    try {
      if (newImg === img) {
        const models = {
          name: newName,
          faculty: newFaculty,
          position: newPosition,
          img: newImg,
        };
        console.log(models, id, "models");
        return await handleUpdateAssociation(models, id);
      } 
      else {
        const imgData = new FormData();
        imgData.append("file", newImg);
        imgData.append("upload_preset", "uploads");
        const imageUrl = await UploadImage(imgData);
        if (imageUrl) {
          const models = {
            name: newName,
            faculty: newFaculty,
            position: newPosition,
            img: imageUrl,
          };
          console.log(models, id, "models");
          return await handleUpdateAssociation(models, id);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <Paper elevation={0} sx={{ p: "1em" }}>
        <div>
          {savedNotify && <Success message={"Association has been updated successfully"}/>}
        </div>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={name}
            onInput={(e) => setnewName(e.target.value)}
          />
        </Paper>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <Input
            type="text"
            name="position"
            placeholder="Position"
            defaultValue={position}
            onInput={(e) => setnewPosition(e.target.value)}
          />
        </Paper>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <Input
            type="text"
            name="faculty"
            placeholder="Faculty"
            defaultValue={faculty}
            onInput={(e) => setnewFaculty(e.target.value)}
          />
        </Paper>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <img src={img} alt="" className={styles.images} />

          <Input
            type="file"
            name="image"
            placeholder="Image"
            // defaultValue={img}
            onInput={(e) => setnewImg(e.target.files[0])}
          />
        </Paper>

        <Button type="submit" startIcon={<BiBrush />}>
          Update
        </Button>
      </Paper>
    </form>
  );
}
