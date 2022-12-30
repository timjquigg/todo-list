import { Pool } from "pg";

let pg;

const dbParams = {
  user: process.env.PGSQL_USER,
  password: process.env.PGSQL_PASSWORD,
  host: process.env.PGSQL_HOST,
  port: process.env.PGSQL_PORT,
  database: process.env.PGSQL_DATABASE,
};

if (process.env.NODE_ENV === "production") {
  dbParams["ssl"] = { rejectUnauthorized: false };
}

if (!pg) {
  pg = new Pool(dbParams);
}

export default pg;
