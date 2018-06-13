var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.1.122:27017/codewr');
var db = mongoose.connection;
var Schema = mongoose.Schema;
var customers = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true}
});

var customerObject = db.model('customers', customers);
var query= {name: "name1"};
var valueUpdate = {$set: {address: "Highway12"}};
customerObject.updateMany(query
, valueUpdate
, function (err, doc) {
    if (err) {
        console.log("update document error");
    } else {
        console.log("update document success");
        console.log(doc.n);
        console.log(doc.nModified);
        console.log(doc.ok);
        console.log(doc);
    }
});