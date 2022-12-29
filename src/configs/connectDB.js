
import mysql from 'mysql2/promise'
// create the connection to database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'shoppc'
});

// simple query
// connection.query(
//   'SELECT * FROM `products`',
//   function(err, results, fields) {
//     console.log(">>> check product: ", results)
    
    
//   }
// );
export default pool;