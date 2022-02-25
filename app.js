const express = require('express');
const mysql = require('mysql');

const app = express();

// DATABASE
const db = mysql.createConnection({
  host: 'localhost',
  user: 'test1234',
  password: 'test1234',
  database: 'acme'
});

db.connect();

// ROUTES
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, result) => {
    if(err) throw err;
    res.send(result);
  })
});

app.listen(5000, () => console.log('Server started listening on port 5000'));