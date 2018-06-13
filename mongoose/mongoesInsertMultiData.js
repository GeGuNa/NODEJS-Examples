var mongoose = require('mongoose');

var db = mongoose.connection;
var Schema = mongoose.Schema;
db.on('error', console.error);
db.once('open', function () {
    console.log("db connect");
    var customers = new Schema({
        _id: {type: Number, required: true},
        name: {type: String, required: true}
    });
    var customerObject = db.model('products', customers);
    var dataInsert = [
        {_id: 154, name: 'Chocolate Heaven'},
        {_id: 155, name: 'Tasty Lemons'},
        {_id: 156, name: 'Vanilla Dreams'}

    ];
    customerObject.insertMany(dataInsert, function (err, result) {
        if (err) {
            console.log("error insert data");
        } else {
            console.log("insert sucess");
            console.log(result);
        }
    });

});

mongoose.connect('mongodb://192.168.1.122:27017/codewr');