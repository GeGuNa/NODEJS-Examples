var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.122:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  /*Delete all customers where the address starts with an "O":*/
  var myquery = { address: /^O/ };
  dbo.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    console.log(obj.result);
    db.close();
  });
});
//