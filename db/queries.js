import prisma from ".";

export async function getTodos() {
  const data = await prisma.todo.findMany();
  return data;
}

export async function createTodo(description) {
  const data = await prisma.todo.create({
    data: {
      description,
    },
  });
  return data;
}

export async function getTodoById(id) {
  const data = await prisma.todo.findUnique({
    where: {
      id: +id,
    },
  });
  return data;
}

export async function updateTodo(id, description) {
  return await prisma.todo.update({
    where: {
      id: +id,
    },
    data: {
      description,
    },
  });
}

export async function deleteTodo(id) {
  return await prisma.todo.delete({
    where: {
      id: +id,
    },
  });
}

export async function toggleComplete(id, completed) {
  const queryString = `
    UPDATE "Todo"
    SET completed = $1
    WHERE id = $2;
    `;
  const queryParams = [completed, id];

  return await prisma.todo.update({
    where: {
      id: +id,
    },
    data: {
      completed,
    },
  });
}
