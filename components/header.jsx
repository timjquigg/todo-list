import { Typography } from "@mui/material";

export default function Header() {
  return (
    <Typography
      variant="h4"
      component="h1"
      color="secondary"
      sx={{ textAlign: "center" }}
      gutterBottom
    >
      To-Do List
    </Typography>
  );
}
