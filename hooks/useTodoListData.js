import axios from "axios";
import useSWR from "swr";
import { useState } from "react";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const fetecher = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

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
    console.log("Delete", id);

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
      console.log(res.data);
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
