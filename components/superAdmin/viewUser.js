import { Input, Paper } from "@mui/material";

export function ViewUser({ data }) {
  const { id, username, role } = data;

  return (
    <Paper elevation={0} sx={{ p: "1em" }}>
      <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>Username</h4>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          defaultValue={username}
          readOnly
        />
      </Paper>
      <Paper sx={{ p: "1em", gap: "1em" }} elevation={0}>
        <h4>Roles</h4>
        <Input
          type="text"
          name="role"
          placeholder="Role"
          defaultValue={role}
          readOnly
        />
      </Paper>
    </Paper>
  );
}
