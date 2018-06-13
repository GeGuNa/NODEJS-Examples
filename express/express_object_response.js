var express = require('express');
var app = express();

app.get('/home', function (req, res) {
//   res.send('Hello World');
   res.status(404).sendFile('./1-0426.jpg');
});

var server = app.listen(8080, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Server listening at http://%s:%s", host, port);
});