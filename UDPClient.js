//client1
var PORT = 41234;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var message = new Buffer('hello server UDP!');

var client = dgram.createSocket('udp4');
client.send(message, PORT, HOST, function (err, bytes) {
    if (err)
        throw err;
    console.log('UDP message sent to ' + HOST + ':' + PORT);
    setTimeout(function () {
        console.log("close client");
        client.close();
    }, 2000);

});
client.on('message', function (msg, info) {
    console.log('Data received from server : ' + msg.toString());
    console.log('Received %d bytes from %s:%d\n', msg.length, info.address, info.port);
});



////client2
//var buffer = require('buffer');
//var udp = require('dgram');
//// creating a client socket
//var client = udp.createSocket('udp4');
//
////buffer msg
//var data = Buffer.from('hello server UDP');
//
//client.on('message',function(msg,info){
//  console.log('Data received from server : ' + msg.toString());
//  console.log('Received %d bytes from %s:%d\n',msg.length, info.address, info.port);
//});
//
////sending msg
//client.send(data,2222,'localhost',function(error){
//  if(error){
//    client.close();
//  }else{
//    console.log('Data sent !!!');
//  }
//});
//
//var data1 = Buffer.from('hello');
//var data2 = Buffer.from('world');
//
////sending multiple msg
//client.send([data1,data2],2222,'localhost',function(error){
//  if(error){
//    client.close();
//  }else{
//    console.log('Data sent !!!');
//  }
//});
//setTimeout(function(){
//client.close();
//},8000);