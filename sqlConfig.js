import mysql from "mysql";

//Mysql connection
async function createSqlConnection() {
  const SqlClient = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "8854892348abSH*",
    database: "abhaydb",
  });
  SqlClient.connect();
  console.log("Mysql connection established");
  return SqlClient;
}
export const SqlClient = await createSqlConnection();
