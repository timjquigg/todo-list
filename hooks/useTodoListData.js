import axios from "axios";
import { useState } from "react";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

export default function useTodoListData(todoListObj) {
  const [todoList, setTodoList] = useState(todoListObj);

  const toggleComplete = (id) => {
    axios
      .put(`/api/todo/${id}`, {
        id,
        completed: !todoList[id].completed,
      })
      .then(() => {
        setTodoList((prev) => {
          const newTodoList = { ...prev };

          newTodoList[id].completed = !newTodoList[id].completed;
          return newTodoList;
        });
      });
  };

  const deleteItem = (id) => {
    axios
      .delete(`/api/todo/${id}`, {
        id,
      })
      .then(() => {
        setTodoList((prev) => {
          const newTodoList = { ...prev };

          delete newTodoList[id];
          return newTodoList;
        });
      });
  };

  const addItem = (description) => {
    axios.post("/api/todo", { description }).then((res) => {
      setTodoList((prev) => {
        const newTodoList = { ...prev };
        newTodoList[res.data.id] = res.data;
        return newTodoList;
      });
    });
  };

  const saveItem = (id, description) => {
    axios.put(`/api/todo/${id}`, { description }).then(() => {
      setTodoList((prev) => {
        const newTodoList = { ...prev };
        newTodoList[id].description = description;
        return newTodoList;
      });
    });
  };

  return {
    todoList,
    toggleComplete,
    deleteItem,
    addItem,
    saveItem,
  };
}
