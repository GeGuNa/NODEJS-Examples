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
    db.model('customers', customers);
    console.log("created collection customers");
});

mongoose.connect('mongodb://192.168.1.122:27017/codewr');

