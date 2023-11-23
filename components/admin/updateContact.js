/* eslint-disable @next/next/no-img-element */
import { BiBrush } from "react-icons/bi";
import { Button, Input, Paper } from "@mui/material";
import { useState } from "react";
import { updateContactById } from "@/lib/helper";
import { useRouter } from "next/router";
import { Success } from "./Success";
//stylesheet
import styles from "../../styles/admin/Table.module.css";

export function UpdateContact({handleClose, data }) {
  const { id, name, phone_no, position, email } = data;
  const [newName, setnewName] = useState(name);
  const [newPhone_no, setnewPhone_no] = useState(phone_no);
  const [newPosition, setnewPosition] = useState(position);
  const [newEmail, setnewEmail] = useState(email);
  const [savedNotify, setSavedNotify] = useState(null);

  const router = useRouter();

  const handleUpdateContact = async (models, id) => {
    const result = await updateContactById({
      contactId: id,
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

  const handleUpdate = async (id) => {
    try {
        const models = {
          name: newName,
          phone_no: newPhone_no,
          position: newPosition,
          email: newEmail,
        }
        console.log(models, id, "models");
        return await handleUpdateContact(models, id);
    } catch (err) {
      console.log(err);
    }
  };
  // patch request here
  return (
   

    <Paper elevation={0} sx={{ p: "1em" }}>
      <div>
      {savedNotify && <Success message={"Executive has been updated succesfully"}/>}
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
          name="phone_no"
          placeholder="Phone number"
          defaultValue={phone_no}
          onInput={(e) => setnewPhone_no(e.target.value)}
        />
      </Paper>
      <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          defaultValue={email}
          onInput={(e) => setnewEmail(e.target.value)}
        />
      </Paper>
      
      <Button onClick={() => handleUpdate(id)} startIcon={<BiBrush />}>
        Update
      </Button>
    </Paper>
  );
}
