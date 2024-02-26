// dbConfig.js

import { Pool } from "pg";

const dbConfig = {
  user: "postgres",
  host: "localhost",
  database: "Heroes",
  password: "123456",
  port: 5432,
};

const pool = new Pool(dbConfig);

export default pool;
