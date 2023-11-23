/* eslint-disable @next/next/no-img-element */

import { Image } from "@chakra-ui/react";
import { Input, Paper } from "@mui/material";
export function ViewAssociation({ data }) {
  const { id, name, faculty, position, img } = data;
  return (
    <Paper elevation={0} sx={{ p: "1em" }}>
      <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>Name</h4>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={name}
          readOnly
        />
      </Paper>
      <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>Position</h4>
        <Input
          type="text"
          name="position"
          placeholder="Position"
          defaultValue={position}
          readOnly
        />
      </Paper>
      <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>Faculty</h4>
        <Input
          type="text"
          name="faculty"
          placeholder="Faculty"
          defaultValue={faculty}
          readOnly
        />
      </Paper>
      <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>Image</h4>

        <Image src={img} alt="" width={200} height={200} />
      </Paper>
    </Paper>
  );
}
