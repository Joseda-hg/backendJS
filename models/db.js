const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Crear conexion a la base de datos
const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});

// Abrir la conexion anterior
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;