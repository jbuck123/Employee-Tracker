const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',
    database: 'class_express',
    user: 'root',
    password: 'Caughtin4k!',
  });

  module.exports = connection;
  