var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.122:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});