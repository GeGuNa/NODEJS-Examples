var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.43:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { name: 1, address: 0 }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
