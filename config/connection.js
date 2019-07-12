// Set up MySQL connection.
var mysql = require("mysql");

// var connection;
// if (process.env.JAWSDB_URL) {
  // connection =  mysql://vhvif13oq2au69ah:uvd7td369houpdaq@tkck4yllxdrw0bhi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/u903m14qs707n7je({
    // connection = mysql.createConnection(process.env.JAWSDB_URL) ({
//  connection = mysql.//vhvif13oq2au69ah:uvd7td369houpdaq@tkck4yllxdrw0bhi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/u903m14qs707n7je) ({
// }
//   connection = mysql.createConnection({
  var connection = mysql.createConnection(process.env.JAWSDB_URL) ({
  host: "tkck4yllxdrw0bhi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "vhvif13oq2au69ah",
  password: "uvd7td369houpdaq",
  database: "u903m14qs707n7je"
  // connection = mysql.createConnection({
  //    host: "localhost",
  //    port: 3306,
  //   user: "root",
  //   password: "root",
  //   database: "burger_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;
