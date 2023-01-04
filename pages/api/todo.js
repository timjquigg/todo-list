// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getTodos, createTodo } from "../../db/queries";

export async function getData() {
  const data = await getTodos();
  const jsonData = JSON.stringify(data);
  return jsonData;
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    const data = await getData();
    res.status(200).json(data);
    return;
  }

  if (req.method === "POST") {
    const data = await createTodo(req.body.description);
    res.status(200).send(data);
    return;
  }
}
