const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Xayah572020!',
  database: 'employee_tracker',
  connectionLimit: 10
});

// Export the pool for use in other files
module.exports = pool;
