var mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.1.122:27017/codewr');
var db = mongoose.connection;
var Schema = mongoose.Schema;
var customers = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true}
});

var customerObject = db.model('customers', customers);
customerObject.findOneAndUpdate({name: "name1"}
, {$set: {address: "Highway1"}}
, function (err, doc) {
    if (err) {
        console.log("update document error");
    } else {
        console.log("update document success");
        console.log(doc);
    }
});