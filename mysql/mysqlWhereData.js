var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  /*Select all customers with the address "Park Lane 38":*/
  con.query("SELECT * FROM customers WHERE address = 'Mountain 21'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
