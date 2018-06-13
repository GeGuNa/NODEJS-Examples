var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var adr = 'Valley 345';
  //Escape the address value:
  var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
  console.log(sql);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

