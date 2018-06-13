var express = require('express');
var app = express();

app.get('/home', function (req, res) {
    console.log("req.app------------------>");
    console.log(req.app);
    console.log("req.baseUrl-------------->");
    console.log(req.baseUrl);
    console.log("req.body------------------>");
    console.log(req.body);
    console.log("req.cookies---------------->");
    console.log(req.cookies);
    console.log("req.fresh------------------>");
    console.log(req.fresh);
    console.log("req.hostname--------------->");
    console.log(req.hostname);
    console.log("req.ip--------------------->");
    console.log(req.ip);
    console.log("req.ips--------------------->");
    console.log(req.ips);
    console.log("req.originalUrl------------->");
    console.log(req.originalUrl);
    console.log("req.params------------------>");
    console.log(req.param("name"));
    console.log("req.path-------------------->");
    console.log(req.path);
    console.log("req.protocol---------------->");
    console.log(req.protocol);
    console.log("req.query------------------->");
    console.log(req.query);
    console.log("req.route------------------->");
    console.log(req.route);
    console.log("req.secure------------------>");
    console.log(req.secure);
    console.log("req.signedCookies----------->");
    console.log(req.signedCookies);
    console.log("req.stale------------------->");
    console.log(req.stale);
    console.log("req.subdomains-------------->");
    console.log(req.subdomains);
    console.log("req.xhr--------------------->");
    console.log(req.xhr);
   res.send('Hello World');
});

var server = app.listen(8080, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Server listening at http://%s:%s", host, port);
});