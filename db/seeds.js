const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const todos = [
  {
    description: "Do Laundry",
  },
  {
    description: "Wash Dishes",
    completed: true,
  },
  {
    description: "Walk Dog",
    completed: false,
  },
];

async function main() {
  console.log(`Start seeding...`);
  for (const el of todos) {
    const todo = await prisma.todo.create({ data: el });
    console.log(`Created todo with id: ${todo.id}`);
  }
  console.log(`Seeding finished`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
