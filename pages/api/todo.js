// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

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

export async function getData() {
  const jsonData = JSON.stringify(data);
  return jsonData;
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    const jsonData = await getData();
    res.status(200).json(jsonData);
  }
}
