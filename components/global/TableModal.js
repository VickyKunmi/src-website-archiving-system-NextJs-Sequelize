import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import styles from "../../styles/admin/Table.module.css";
import { cloneElement } from "react";

export const TableModal = ({
  icon,
  btntitle,
  title,
  callbackfn,
  data = {},
  children,
}) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = async () => {
    await callbackfn({ data });
    setOpen(true);
  };

  return (
    <>
      <Button
        className={styles.button}
        startIcon={icon}
        variant="outlined"
        onClick={handleClickOpen}
      >
        {btntitle}
      </Button>
      <Dialog
        maxWidth={"lg"}
        onClose={handleClose}
        fullWidth={true}
        open={open}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{cloneElement(children, { handleClose })}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
