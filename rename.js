var fs = require('fs');

fs.rename('newFile.txt', 'file_Renew.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
