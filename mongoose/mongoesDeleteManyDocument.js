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
    var query = { name: 'name1' };
    customerObject.deleteMany(query, function (err, result) {
        if (err) {
            console.log("error query");
        } else {
            console.log(result);
        }
    });
});

mongoose.connect('mongodb://192.168.1.122:27017/codewr');