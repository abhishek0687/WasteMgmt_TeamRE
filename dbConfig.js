/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "welcome",
  database: "sample"
});

con.connect();
module.exports.con = con;
*/

exports.dbConfig = {
  host: "localhost",
  user: "root",
  password: "welcome",
  database: "sample"

}

exports.webPort = 9001;

exports.httpMsgsFormat = "JSON";
//SPGKHGYYRG,SP3WUK6E99