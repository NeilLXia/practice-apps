const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() => db.queryAsync(
    "CREATE TABLE IF NOT EXISTS users (" +
    "id INT NOT NULL AUTO_INCREMENT PRIMARY KEY," +
    "username TEXT NOT NULL," +
    "domain TEXT NOT NULL," +
    "password TEXT NOT NULL" +
    ")"
  ))
  .then(() => db.queryAsync(
    "CREATE TABLE IF NOT EXISTS responses (" +
    "id INT NOT NULL AUTO_INCREMENT PRIMARY KEY," +
    "email TEXT," +
    "firstname TEXT," +
    "lastname TEXT," +
    "shippingaddress TEXT," +
    "shippingcity TEXT," +
    "shippingstate VARCHAR(2)," +
    "shippingzip DECIMAL(5)" +
    ")"
  ))
  .catch((err) => console.log(err));

module.exports = db;
