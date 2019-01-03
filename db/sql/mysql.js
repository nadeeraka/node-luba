//optional connecting using mysql

const mysql = require("mysql2");
const secret = require("../../util/secret");

const pool = mysql.Pool({
  host: "localhost",
  user: "root",
  database: "node-test",
  password: secret
});

module.exports = pool.promise();
