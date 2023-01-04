import {
  deleteTodo,
  getTodoById,
  toggleComplete,
  updateTodo,
} from "../../../db/queries";

export default async function handler(req, res) {
  const id = req.query.id;

  if (req.method === "GET") {
    const data = await getTodoById(id);
    res.status(200).json(data);
    return;
  }

  if (req.method === "PUT") {
    const description = req.body.description;
    const completed = req.body.completed;

    if (description) {
      await updateTodo(id, description);
      res.send();
      return;
    }
    if (!description) {
      toggleComplete(id, completed);
      res.send();
      return;
    }
  }

  if (req.method === "DELETE") {
    await deleteTodo(id);
    res.send();
    return;
  }
}
