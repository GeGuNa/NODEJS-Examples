var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.122:27017/";

MongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    var dbo = db.db("mydb");
    var myobj = [
        {name: 'name1', address: 'Highway 71'},
        {name: 'name2', address: 'Lowstreet 4'},
        {name: 'name3', address: 'Apple st 652'},
        {name: 'name4', address: 'Mountain 21'},
        {name: 'name5', address: 'Valley 345'},
        {name: 'name6', address: 'Ocean blvd 2'},
        {name: 'name7', address: 'Green Grass 1'},
        {name: 'name8', address: 'Sky st 331'},
        {name: 'name9', address: 'One way 98'},
        {name: 'name10', address: 'Yellow Garden 2'},
        {name: 'name11', address: 'Park Lane 38'},
        {name: 'name12', address: 'Central st 954'},
        {name: 'name13', address: 'Main Road 989'},
        {name: 'name14', address: 'Sideway 1633'}
    ];
    dbo.collection("customers").insertMany(myobj, function (err, res) {
        if (err)
            throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        console.log(res);
        db.close();
    });
});
