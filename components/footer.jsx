import { Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Typography
      variant="body1"
      color="info.main"
      sx={{ textAlign: "center" }}
      gutterBottom
    >
      Made by{" "}
      <Link
        href="https://github.com/timjquigg"
        target="_blank"
        underline="hover"
        color="secondary"
        rel="noopener"
      >
        {"Tim Quigg"}
      </Link>
    </Typography>
  );
}
