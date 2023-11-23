/* eslint-disable @next/next/no-img-element */

import { Input, Paper } from "@mui/material";
import "suneditor/dist/css/suneditor.min.css";
import { Image } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const SunEditor = dynamic(() => import("suneditor-react"), {
  ssr: false,
});

export default function UpdateNews({ data }) {
  const { id, title, img, date, news, category } = data;

  return (
    <form onSubmit={handleUpdate}>
      <Paper elevation={0} sx={{ p: "1em" }}>
        <h4>Title</h4>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <Input
            type="text"
            name="title"
            placeholder="Title"
            defaultValue={title}
            readOnly
          />
        </Paper>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <h4>Date</h4>
          <Input
            type="text"
            name="date"
            placeholder="Date"
            defaultValue={date}
            readOnly
          />
        </Paper>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <h4>Category</h4>
          <Input
            type="text"
            name="category"
            placeholder="Category"
            defaultValue={category}
            readOnly
          />
        </Paper>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <Image src={img} alt="" width={200} height={200} />
        </Paper>
        <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
          <SunEditor autoFocus={true} defaultValue={news} />
        </Paper>
      </Paper>
    </form>
  );
}
