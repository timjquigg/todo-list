import pg from ".";

export async function getTodos() {
  const queryString = `
    SELECT * 
    FROM todos;
  `;
  const data = await pg.query(queryString);
  return data.rows;
}

export async function createTodo(description) {
  const queryString = `
    INSERT INTO todos 
    (description)
    VALUES ($1)
    RETURNING *;
  `;
  const queryParams = [description];
  const data = await pg.query(queryString, queryParams);
  return data.rows;
}

export async function getTodoById(id) {
  const queryString = `
    SELECT * 
    FROM todos 
    WHERE id = $1;
  `;
  const queryParams = [id];
  const data = await pg.query(queryString, queryParams);
  return data.rows;
}

export async function updateTodo(id, description) {
  const queryString = `
    UPDATE todos
    SET description = $1
    WHERE id = $2;
  `;
  const queryParams = [description, id];
  return await pg.query(queryString, queryParams);
}

export async function deleteTodo(id) {
  const queryString = `
    DELETE FROM todos
    WHERE id = $1;
  `;
  const queryParams = [id];
  return await pg.query(queryString, queryParams);
}

export async function toggleComplete(id, completed) {
  const queryString = `
    UPDATE todos
    SET completed = $1
    WHERE id = $2;
    `;
  const queryParams = [completed, id];
  return await pg.query(queryString, queryParams);
}
