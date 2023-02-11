const { Pool } = require("pg");
require("dotenv").config({ path: `${__dirname}/../../.env` });

const pool = new Pool({
  user: process.env.USERDB,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.POSTGRES_PORT,
});

module.exports = pool;
