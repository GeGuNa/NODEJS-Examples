var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.122:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  /*Return only the documents with the address "Park Lane 38":*/
  var query = { address: "Valley 345" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
