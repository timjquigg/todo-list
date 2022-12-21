import TodoListItem from "./todoListItem";
import { List } from "@mui/material";

const data = [
  {
    id: 1,
    description: "Do Laundry",
    completed: false,
  },
  {
    id: 2,
    description: "Wash Dishes",
    completed: true,
  },
  {
    id: 3,
    description: "Walk Dog",
    completed: false,
  },
];

export default function TodoList() {
  const items = data.map((item) => {
    return (
      <TodoListItem
        key={item.id}
        description={item.description}
        completed={item.completed}
      />
    );
  });

  return <List>{items}</List>;
}
