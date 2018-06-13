var mongoose = require('mongoose');
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function () {
   console.log("connect db codewr");
   
});
mongoose.connect('mongodb://192.168.1.122:27017/codewr');
