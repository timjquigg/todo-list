// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const data = [
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

export async function getData() {
  const jsonData = JSON.stringify(data);
  return jsonData;
}

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      const jsonData = await getData();
      res.status(200).json(jsonData);
      break;

    case "POST":
      const ids = data.map((el) => el.id).sort((a, b) => a - b);
      const newId = ids.slice(-1)[0] + 1;
      data.push({ id: newId, description: "", completed: false });

      res.status(200).send(data.slice(-1)[0]);
      break;
  }
}
