/* eslint-disable @next/next/no-img-element */

import {Input, Paper } from "@mui/material";

export function ViewContact({ data }) {
  const { id, name, phone_no, position, email } = data;
 
  
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
        <h4>Phone number</h4>
        <Input
          type="text"
          name="phone_no"
          placeholder="Phone number"
          defaultValue={phone_no}
          readOnly
          
        />
      </Paper>
      <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
      <h4>Email</h4>

        <Input
          type="text"
          name="email"
          placeholder="Email"
          defaultValue={email}
          readOnly
          
        />
      </Paper>
      
      
    </Paper>
  );
}
