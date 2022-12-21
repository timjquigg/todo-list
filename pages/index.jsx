import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import Header from "../components/header";
import TodoList from "../components/todoList";
import Footer from "../components/footer";
import { Typography } from "@mui/material";
import { getData } from "./api/todo";

export default function Index(props) {
  const todoListObj = {};
  JSON.parse(props.data).forEach((item) => (todoListObj[item.id] = item));
  const [todoList, setTodoList] = useState(todoListObj);

  const toggleComplete = (id) => {
    console.log("complete", id);
    setTodoList((prev) => {
      const newTodoList = { ...prev };

      newTodoList[id].completed = !newTodoList[id].completed;
      return newTodoList;
    });
  };

  return (
    <Container maxWidth="xs">
      <Header />
      <Box sx={{ my: 4 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Outstanding
        </Typography>
        <TodoList
          todoList={todoList}
          completed={false}
          setCompleted={toggleComplete}
        />

        <Typography variant="h6" component="h2" gutterBottom>
          Completed
        </Typography>
        <TodoList
          todoList={todoList}
          completed={true}
          setCompleted={toggleComplete}
        />
      </Box>
      <Footer />
    </Container>
  );
}

export async function getServerSideProps() {
  const data = await getData();
  return { props: { data } };
}
