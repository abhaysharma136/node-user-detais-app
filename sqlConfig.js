import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();
//Mysql connection
async function createSqlConnection() {
  const SqlClient = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.SQLPORT,
    user: process.env.SQLUSER,
    password: process.env.SQLPASSWORD,
    database: process.env.SQLDATABASE,
  });
  SqlClient.connect();
  console.log("Mysql connection established");
  return SqlClient;
}
export const SqlClient = await createSqlConnection();
