const mysql = require('mysql');

exports.createConnection = async (req, res, next) => {  
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'qwerty',
    password: 'qwerty',
    database: 'qwerty'
  });

  connection.connect();
  req.connection = connection;
  next()
}

exports.endConnection = (req, res, next) => {
  req.connection.end();
  req.connection = null;
}