var mongoose = require('mongoose');

var db = mongoose.connection;
var Schema = mongoose.Schema;
db.on('error', console.error);
db.once('open', function () {
    console.log("db connect");
    var customers = new Schema({
        name: {type: String, required: true},
        address: {type: String, required: true}
    });
    var customerObject = db.model('customers', customers);
    var query = {address: /^S/};
    var mysort = {name: 1};
    customerObject.find({},query, function (err, result) {
        if (err) {
            console.log("error query");
        } else {
            console.log(result);
        }
    }).sort(mysort);
});

mongoose.connect('mongodb://192.168.1.122:27017/codewr');