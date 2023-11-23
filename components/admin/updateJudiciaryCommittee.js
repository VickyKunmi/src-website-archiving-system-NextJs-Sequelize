/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { updateJudiciaryCommitteeById, UploadImage } from "@/lib/helper";
import { Button, Input, Paper } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { Success } from "./Success";
import styles from "../../styles/admin/Table.module.css";
import { BiBrush } from "react-icons/bi";

export default function UpdateJudiciaryCommittee({ handleClose, data }) {
  const { id, name, position, img } = data;
  const [newName, setnewName] = useState(name);
  const [newPosition, setnewPosition] = useState(position);
  const [newImg, setnewImg] = useState(img);
  const [savedNotify, setSavedNotify] = useState(null);
  const router = useRouter();
  const handleUpdateJudiciaryCommittee = async (models, id) => {
    const result = await updateJudiciaryCommitteeById({
      judiciaryCommitteeId: id,
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
      if (newImg == img) {
        const models = {
          name: newName,
          position: newPosition,
          img: newImg,
        };
        return await handleUpdateJudiciaryCommittee(models, id);
      } else {
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
          return await handleUpdateJudiciaryCommittee(models, id);
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
          {savedNotify && (
            <Success message={"Judiciary committee updated successfully!"} />
          )}
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
