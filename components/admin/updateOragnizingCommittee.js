/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import styles from "../../styles/admin/Table.module.css";
import { useRouter } from "next/router";
import { UploadImage, updateOrganizingCommitteeById,  } from "@/lib/helper";
import axios from "axios";
import { Button, Input, Paper } from "@mui/material";
import { BiBrush } from "react-icons/bi";
import { Success } from "./Success";

export function UpdateOrganizingCommittee({handleClose, data }) {
  const { id, name, position, img } = data;
  const [newName, setnewName] = useState(name);
  const [newPosition, setnewPosition] = useState(position);
  const [newImg, setnewImg] = useState(img);
  const [savedNotify, setSavedNotify] = useState(null);

  const router = useRouter();
  const handleUpdateOrganizingCommittee = async (models, id) => {
    const result = await updateOrganizingCommitteeById({
      organizingCommitteeId: id,
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
          name: newName,
          position: newPosition,
          img: newImg,
        };
        return await handleUpdateOrganizingCommittee(models, id);
      } 
      else {
        const imgData = new FormData();
        imgData.append("file", newImg);
        imgData.append("upload_preset", "uploads");
        const imageUrl = await UploadImage(imgData);
        
        if (imageUrl) {
          const models = {
            name: newName,
            position: newPosition,
            img: imageUrl,
          };
          return await handleUpdateOrganizingCommittee(models, id);
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
          {savedNotify && <Success message={"Estate committee updated successfully"}/>}
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
          <img src={img} alt="" className={styles.images} />
          <Input
            type="file"
            name="image"
            placeholder="Image"
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
