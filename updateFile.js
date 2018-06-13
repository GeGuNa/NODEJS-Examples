var fs = require('fs');
//fs.appendFile() method appends the specified content at the end of the specified file
fs.appendFile('newFile.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});