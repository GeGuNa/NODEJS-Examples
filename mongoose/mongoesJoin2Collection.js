var mongoose = require('mongoose');

var db = mongoose.connection;
var Schema = mongoose.Schema;
db.on('error', console.error);
db.once('open', function () {
    console.log("db connect");
     db.collection('orders').aggregate([
        {$lookup:
                    {
                        from: 'products',
                        localField: 'product_id',
                        foreignField: '_id',
                        as: 'orderdetails'
                    }
        }
    ]).toArray(function (err, res) {
        if (err)
            throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});

mongoose.connect('mongodb://192.168.1.122:27017/codewr');
