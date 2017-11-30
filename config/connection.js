const mysql = require('mysql');

var config = {
  port: 3306
  host:'us-cdbr-iron-east-05.cleardb.net' || 'localhost',
  user: 'bb6450110835d3' || 'root',
  password: '8c513618' || '',
  database: 'b8fd4a5101137fa' || 'burgers_db'
};

var pool = mysql.createPool(config);

pool.getConnection(function(err, connection) {
  // Use the connection
  connection.query('SELECT * FROM burgers', function (error, results, fields) {
    // And done with the connection.
    connection.release();

    // Handle error after the release.
    if (error) throw error;

    // Don't use the connection here, it has been returned to the pool.
  });
});


module.exports = pool;