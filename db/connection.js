const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',
    database: 'employee_info',
    user: 'root',
    password: 'Caughtin4k!',
  });

  module.exports = connection;
  