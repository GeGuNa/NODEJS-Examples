var crypto = require('crypto');

var secret = 'abcdefg';
var message = "I love you";
var hash = crypto.createHmac('sha256', secret).update(message).digest('hex');
console.log(hash);