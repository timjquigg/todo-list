import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import Header from "../components/header";
import TodoList from "../components/todoList";
import Footer from "../components/footer";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Header />
      <Box sx={{ my: 4 }}>
        <TodoList />
      </Box>
      <Footer />
    </Container>
  );
}
