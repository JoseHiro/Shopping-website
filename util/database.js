const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node-complete', //database name from the server
  password: 'password1010'
})

module.exports = pool.promise();
