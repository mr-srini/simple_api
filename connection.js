import mysql from "mysql2";

var databaseConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Srinidshooter",
  database: "express_api",
});

databaseConnection.connect((error) => {
  if (error) console.log(error);
  else console.log("Connected to database");
});

export default databaseConnection;
