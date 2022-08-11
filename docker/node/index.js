const express = require('express');
const { Pool } = require('pg');

const app = express();

const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'postgres',
  password: 'admin',
  port: 5432,
})

const SQL_QUERY = `INSERT INTO people(id, name) values('1', 'John')`;
pool.query(SQL_QUERY).then(res => {
  pool.end();
})

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Full cycle!!!</h1>")
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));