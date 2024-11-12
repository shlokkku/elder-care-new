const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',       // ensure this matches your DB host
  user: 'root',   // your MySQL username
  password: 'abc123', // your MySQL password
  database: 'elder_care',   // ensure this is the correct database name
});

module.exports = db;
