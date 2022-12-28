import TodoListItem from "./todoListItem";
import { List } from "@mui/material";
import AddTaskIcon from "@mui/icons-material/AddTask";
import IconButton from "@mui/material/IconButton";
import NewTodo from "./newTodo";

export default function TodoList(props) {
  // console.log(props, "TodoList");
  const items = Object.values(props.todoList)
    .filter((item) => item.completed === props.completed)
    .map((item) => {
      return (
        <TodoListItem
          key={item.id}
          id={item.id}
          description={item.description}
          toggleComplete={props.setCompleted}
          completed={item.completed}
          deleteItem={props.deleteItem}
          saveItem={props.saveItem}
        />
      );
    });

  return (
    <List>
      {items}
      {!props.completed && <NewTodo addItem={props.addItem} />}
    </List>
  );
}
