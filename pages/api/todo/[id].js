import data from "../todo";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      const jsonData = JSON.stringify(
        data.filter((item) => item.id === req.params)
      );
      res.status(200).json(jsonData);
      break;

    case "PUT":
      console.log(req.body);
      res.send();
      break;

    case "DELETE":
      console.log(req.body);
      res.send();
      break;
  }
}
