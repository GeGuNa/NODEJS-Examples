var satelize = require('satelize');
//var ip = '46.19.37.108';
var ip = '115.78.13.12';
satelize.satelize({ip:ip}, function(err, payload) {
    console.log(payload);
});